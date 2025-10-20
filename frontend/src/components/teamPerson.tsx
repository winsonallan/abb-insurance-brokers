import Image from 'next/image';

interface TeamMemberProps {
	name: string;
	path_url: string;
	position: string;
	description: string;
}

interface TeamGroup {
	groupData: TeamMemberProps[];
}

export default function TeamPerson({ groupData }: TeamGroup) {
	return (
		<div style={{ marginBottom: '5rem' }}>
			<div
				className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8"
				style={{ justifyContent: 'center' }}
			>
				{groupData.map((src, i) => (
					<div
						className="personContainer"
						key={`container__${src.name}`}
						style={{ marginRight: '1rem', marginLeft: '1rem' }}
					>
						<div
							className="personImage flex"
							style={{ justifyContent: 'center' }}
						>
							<Image
								className={`teamImage`}
								id={`teamImage__${i}`}
								src={`/support/images/our-team/${src.path_url}`}
								alt={src.name}
								width={400}
								height={400}
								style={{
									objectFit: 'fill',
									objectPosition: 'top',
									borderRadius: '50%',
									marginTop: '1rem',
									marginBottom: '.5rem',
									boxShadow: '5px 5px 5px var(--lightskyblue)',
								}}
							/>
						</div>
						<div
							className="personName p-2"
							style={{
								textAlign: 'center',
								fontWeight: 'bold',
								fontSize: '1.2rem',
								height: '5rem',
							}}
						>
							{src.name}
						</div>
						<div
							className="personPosition p-2"
							style={{ textAlign: 'center', fontWeight: 'bold' }}
						>
							{src.position}
						</div>
						<div
							className="personDescription p-2"
							style={{ textAlign: 'center' }}
						>
							{src.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
