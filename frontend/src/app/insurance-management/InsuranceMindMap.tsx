/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: false positive */
/** biome-ignore-all lint/suspicious/noExplicitAny: false positive */

'use client';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { useEffect, useRef } from 'react';
import './mindmap.css';

export default function InsuranceMindMap() {
	const refSvg = useRef<SVGSVGElement>(null);

	useEffect(() => {
		let main: any = null;

		async function initMindmap() {
			const res = await fetch('/mindmap-data.md');
			const markdown = await res.text();

			const transformer = new Transformer();
			const { root } = transformer.transform(markdown);

			function assignDepth(node: any, depth = 0) {
				node.depth = depth;
				if (node.children) {
					node.children.forEach((child: any) => assignDepth(child, depth + 1));
				}
			}

			assignDepth(root);

			// 🎨 Color palette per depth
			const colors = [
				'var(--greenishblue)', // depth 1
				'var(--lightgreenishblue)', // depth 0
				'var(--lighteroceanblue)', // depth 2+
			];

			const lineWidths = [5, 3, 2, 1];

			const colorForDepth = (depth: number) => colors[depth % colors.length];
			const widthForDepth = (depth: number) =>
				lineWidths[depth % lineWidths.length] ?? '1px';

			// ✅ Now colorFn will always get the correct depth
			const colorFn = (node: any) => colorForDepth(node.depth || 0);
			const widthFn = (node: any) => widthForDepth(node.depth || 0);

			setTimeout(() => main?.fit?.(), 300);

			const applyTextColors = () => {
				const svg = refSvg.current;
				if (!svg) return;

				const textEls = svg.querySelectorAll('.markmap-foreign');
				textEls.forEach((textEl: any) => {
					const data = textEl.__data__;
					if (data?.depth != null) {
						textEl.style.color = colorForDepth(data.depth);
					}
				});
			};

			// Clear previous SVGs
			refSvg.current.innerHTML = '';

			// Create maps
			if (refSvg.current) {
				main = Markmap.create(
					refSvg.current,
					{
						color: colorFn,
						lineWidth: widthFn,
						pan: true,
						zoom: true,
						autoFit: false,
					},
					root,
				);

				applyTextColors();
			}

			// Apply after layout settles
			setTimeout(() => {
				main?.fit?.();
				applyTextColors();
				if (window.innerWidth < 768 && refSvg.current?.parentElement) {
					const container = refSvg.current.parentElement;
					const scrollWidth = container.scrollWidth;
					const clientWidth = container.clientWidth;
					container.scrollLeft = (scrollWidth - clientWidth) / 2;
				}
			}, 500);

			// Reapply on resize
			const handleResize = () => {
				setTimeout(applyTextColors, 100);
			};
			window.addEventListener('resize', handleResize);

			return () => {
				if (refSvg.current) refSvg.current.innerHTML = '';
			};
		}

		initMindmap();
	}, []);

	return (
		<div
			className="mt-6 relative m-auto w-14/15 overflow-auto"
			style={{
				height: '80vh',
				borderRadius: '8px',
				overflow: 'hidden',
				border: '4px solid var(--lightgreyblue)',
				touchAction: 'pan-x pan-y pinch-zoom',
			}}
		>
			<div className="w-full h-full">
				<svg
					ref={refSvg}
					style={{
						width: '100%',
						height: '100%',
						display: 'block',
					}}
				/>
			</div>
		</div>
	);
}
