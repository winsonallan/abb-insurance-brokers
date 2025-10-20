interface JobData {
	title: string;
	department: string;
	employmentType: string;
	location: string;
	keyRes: string;
	requirements: string;
	applyEmail: string;
}

export default function JobList({
	title,
	department,
	employmentType,
	location,
	keyRes,
	requirements,
	applyEmail,
}: JobData) {
	return (
		<>
			<hr className="mt-4 mb-4" style={{ color: 'var(--darkblue)' }} />

			<div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
				<div className="leftJob">
					<div
						className="jobTitle text-2xl font-bold text-center md:text-left"
						style={{ color: 'var(--darkblue)' }}
					>
						{title}
					</div>
					<div className="flex flex-wrap justify-center md:justify-start">
						<div
							className="jobDepartment pl-3 pr-3 pt-1 pb-1 mt-2 ml-1 mr-1 md:ml-0"
							style={{
								border: '3px solid var(--darkblue)',
								borderRadius: '.5rem',
								width: 'max-content',
								fontWeight: 'bold',
								color: 'var(--darkblue)',
							}}
						>
							<i className="fa-solid fa-computer"></i> {department}
						</div>
						<div
							className="jobType pl-3 pr-3 pt-1 pb-1 mt-2 ml-1 mr-1 md:ml-0"
							style={{
								border: '3px solid var(--darkblue)',
								borderRadius: '.5rem',
								width: 'max-content',
								fontWeight: 'bold',
								color: 'var(--darkblue)',
							}}
						>
							<i className="fa-solid fa-briefcase"></i> {employmentType}
						</div>

						<div
							className="jobType pl-3 pr-3 pt-1 pb-1 mt-2 ml-1 mr-1 md:ml-0"
							style={{
								border: '3px solid var(--darkblue)',
								borderRadius: '.5rem',
								width: 'max-content',
								fontWeight: 'bold',
								color: 'var(--darkblue)',
							}}
						>
							<i className="fa-solid fa-location-dot"></i> {location}
						</div>
					</div>
				</div>

				<div className="rightJob col-span-2 mt-3 md:mt-0">
					<div className="jobDesc text-center md:text-left">
						<b style={{ color: 'var(--darkblue)' }}>Key Responsibilities</b>
						<br />
						{keyRes.split(/\r?\n/).map((line, i) => (
							<>
								{line}
								<br />
							</>
						))}
						<br />
						<br />
						<b style={{ color: 'var(--darkblue)' }}>Requirements</b>
						<br />
						{requirements.split(/\r?\n/).map((line, i) => (
							<>
								{line}
								<br />
							</>
						))}
						<br />
						<br />
						<b style={{ color: 'var(--darkblue)' }}>Benefits</b>
						<br />- Good Salary & Bonuses
						<br />- Health Insurance & BPJS
						<br />
						<br />
						Apply by sending your CV to&nbsp;
						<b style={{ color: 'var(--darkblue)' }}>{applyEmail}</b> with the
						subject <b style={{ color: 'var(--darkblue)' }}>"{title}"</b>.
					</div>
				</div>
			</div>
		</>
	);
}
