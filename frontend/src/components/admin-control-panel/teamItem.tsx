interface teamItemProps {
	fileName: string;
	fileURL: string;
	name: string;
	position_en: string;
	bio_en: string;
	position_id: string;
	bio_id: string;
}

export default function TeamItem({
	fileName,
	fileURL,
	name,
	position_en,
	bio_en,
	position_id,
	bio_id,
}: teamItemProps) {
	return (
		<div className="teamItem py-2 px-4">
			<div className="fileDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>File:&nbsp;</b>
				<a href={fileURL}>
					<u>{fileName}</u>
				</a>
			</div>
			<div className="nameTextDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Name:&nbsp;</b>
				{name}
			</div>
			<div className="positionTextDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Position (EN):&nbsp;</b>
				{position_en}
			</div>
			<div className="positionTextDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Position (ID):&nbsp;</b>
				{position_id}
			</div>
			<div className="miniBioDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Bio (EN):&nbsp;</b>
				{bio_en}
			</div>
			<div className="miniBioDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Bio (ID):&nbsp;</b>
				{bio_id}
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
