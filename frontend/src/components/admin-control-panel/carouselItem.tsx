interface CarouselItemProps {
	fileName: string;
	fileURL: string;
	heading_en: string;
	heading_id: string;
	text_en: string;
	text_id: string;
}

export default function CarouselItem({
	fileName,
	fileURL,
	heading_en,
	heading_id,
	text_en,
	text_id,
}: CarouselItemProps) {
	return (
		<div className="carouselItem py-2 px-4">
			<div className="fileDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>Image:&nbsp;</b>
				<a href={fileURL}>
					<u>{fileName}</u>
				</a>
			</div>
			<div className="headingENTextDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>Heading (EN):&nbsp;</b>
				{heading_en}
			</div>
			<div className="headingIDTextDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>Heading (ID):&nbsp;</b>
				{heading_id}
			</div>
			<div className="carouselTextENDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>Content (EN):&nbsp;</b>
				{text_en}
			</div>
			<div className="carouselTextDiv flex flex-row mb-1">
				<b style={{ color: 'var(--darkblue)' }}>Content (ID):&nbsp;</b>
				{text_id}
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
