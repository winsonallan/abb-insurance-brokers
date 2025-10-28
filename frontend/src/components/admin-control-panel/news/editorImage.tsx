import Image from 'next/image';

export default function EditorImage({
	src,
	title,
}: {
	src: string;
	title: string;
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
					src={`/support/images/news/${src}`}
					alt={title}
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'top',
						borderRadius: '5px',
					}}
				/>
			</div>
			<div
				className="links flex flex-col gap-x-5 justify-center text-center pt-4"
				style={{ color: 'var(--linkblue)' }}
			>
				<div className="moveUpLink">Move Up</div>
				<div className="editLink">Replace</div>
				<div className="editLink">Remove</div>
				<div className="moveDownLink">Move Down</div>
			</div>
		</div>
	);
}
