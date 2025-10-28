interface careerItemProps {
	title: string;
	department: string;
	type: string;
	location: string;
	keyResponsibilities: string;
	requirements: string;
	email: string;
}

export default function CareerItem({
	title,
	department,
	type,
	location,
	keyResponsibilities,
	requirements,
	email,
}: careerItemProps) {
	return (
		<div className="careerItem py-2 px-4">
			<div className="titleDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Title:&nbsp;</b>
				{title}
			</div>
			<div className="departmentDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Department:&nbsp;</b>
				{department}
			</div>
			<div className="typeDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Type:&nbsp;</b>
				{type}
			</div>
			<div className="locationDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Location:&nbsp;</b>
				{location}
			</div>
			<div className="keyResponsibilitiesDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Key Responsibilities:&nbsp;</b>
				{keyResponsibilities}
			</div>
			<div className="requirementDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Requirements:&nbsp;</b>
				{requirements}
			</div>
			<div className="emailDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Email:&nbsp;</b>
				{email}
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
