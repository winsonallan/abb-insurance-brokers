interface teamItemProps {
	fileName: string;
	fileURL: string;
	name: string;
	position: string;
	miniBio: string;
}

export default function TeamItem({
	fileName,
	fileURL,
	name,
	position,
	miniBio,
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
				<b style={{ color: 'var(--darkblue)' }}>Position:&nbsp;</b>
				{position}
			</div>
			<div className="miniBioDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Bio:&nbsp;</b>
				{miniBio}
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
