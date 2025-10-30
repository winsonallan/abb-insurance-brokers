import Image from 'next/image';
import { imagesURL } from '../../../../public/support/js/webState';

export default function EditorImage({
	src,
	title,
	slug,
}: {
	src: string;
	title: string;
	slug: string;
}) {
	return (
		<div className="flex flex-col">
			<div
				className="relative"
				style={{
					width: '280px',
					minWidth: '280px',
					height: '210px',
					minHeight: '210px',
					border: '2px solid var(--darkblue)',
					borderRadius: '8px',
				}}
			>
				<Image
					src={`${imagesURL}news/${slug}/${src}`}
					alt={title}
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'top',
						borderRadius: '5px',
					}}
				/>
			</div>
		</div>
	);
}
