interface careerItemProps {
	title: string;
	department: string;
	type: string;
	location: string;
	key_res_en: string;
	requirements_en: string;
	key_res_id: string;
	requirements_id: string;
	email: string;
}

export default function CareerItem({
	title,
	department,
	type,
	location,
	key_res_en,
	key_res_id,
	requirements_en,
	requirements_id,
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
				<b style={{ color: 'var(--darkblue)' }}>
					Key Responsibilities (EN):&nbsp;
				</b>
				{key_res_en}
			</div>
			<div className="keyResponsibilitiesDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>
					Key Responsibilities (ID):&nbsp;
				</b>
				{key_res_id}
			</div>
			<div className="requirementDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Requirements (EN):&nbsp;</b>
				{requirements_en}
			</div>
			<div className="requirementDiv flex flex-col mb-2">
				<b style={{ color: 'var(--darkblue)' }}>Requirements (ID):&nbsp;</b>
				{requirements_id}
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
