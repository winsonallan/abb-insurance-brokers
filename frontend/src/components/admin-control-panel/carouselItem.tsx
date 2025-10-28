interface CarouselItemProps {
	fileName: string;
	fileURL: string;
	heading: string;
	text: string;
}

export default function CarouselItem({
	fileName,
	fileURL,
	heading,
	text,
}: CarouselItemProps) {
	return (
		<div className="carouselItem py-2 px-4">
			<div className="fileDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>File:&nbsp;</b>
				<a href={fileURL}>
					<u>{fileName}</u>
				</a>
			</div>
			<div className="headingTextDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>Heading:&nbsp;</b>
				{heading}
			</div>
			<div className="carouselTextDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>Content:&nbsp;</b>
				{text}
			</div>
			<div
				className="w-full mt-2 flex flex-row"
				style={{
					textDecoration: 'underline',
					color: 'var(--linkblue)',
					textAlign: 'center',
					justifyContent: 'center',
				}}
			>
				<div className="editLink ml-2 mr-2">Edit</div>
				<div className="removeLink ml-2 mr-2">Remove</div>
			</div>
		</div>
	);
}
