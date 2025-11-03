import type { CSSProperties } from 'react';

interface MainPointProps {
	pointText: string;
	pointClassName: string;
	center: boolean;
	color: CSSProperties | undefined;
}

export default function SmallMainPoint({
	pointClassName = 'leftPoint',
	pointText,
	center = false,
	color = 'var(--mainblue)',
}: MainPointProps) {
	return (
		<div className="mainPoints flex flex-col sm:justify-center">
			<div
				className={`${pointClassName} w-full text-center lg:text-left`}
				style={{
					marginBottom: '0',
					paddingBottom: '.5rem',
				}}
			>
				<h1
					className="text-2xl"
					style={
						center
							? { textAlign: 'center', color: { color } }
							: { textAlign: 'left', color: { color } }
					}
				>
					<b>{pointText}</b>
				</h1>
			</div>
		</div>
	);
}
