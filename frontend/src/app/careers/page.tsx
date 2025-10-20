import type { Metadata } from 'next';
import Image from 'next/image';
import JobList from '@/components/jobList';
import NoJob from '@/components/noJob';
import { apiURL } from '../../../public/support/js/webState';

interface JobData {
	position_name: string;
	department_name: string;
	employment_type: string;
	location: string;
	key_responsibility: string;
	requirements: string;
	apply_email: string;
}

export const metadata: Metadata = {
	title: 'Careers | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

const fetchAllJobs = async () => {
	try {
		const res = await fetch(`${apiURL}career-posts`, {
			method: 'GET',
		});

		const resJSON = await res.json();

		return resJSON;
	} catch (error) {
		console.log(error);
	}
};

const { data: jobsData } = await fetchAllJobs();
const jobLen = jobsData.length;

export default function Careers() {
	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<h1 className="text-3xl" style={{ color: 'var(--mainblue)' }}>
						<b>Join Us Into Making Insurance As Accessible As Possible</b>
					</h1>

					<div
						className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-4"
						style={{ justifyContent: 'space-between' }}
					>
						<div className="textCareer lg:pr-4">
							Integer porttitor mauris mattis neque pretium ornare. Vivamus at
							quam nisi. In sollicitudin erat ac ex malesuada, ac fermentum
							ligula tincidunt. Phasellus vitae euismod neque. Etiam diam neque,
							elementum sit amet dapibus nec, aliquam malesuada dolor. Praesent
							convallis feugiat iaculis. Nunc eu nulla sit amet libero semper
							luctus a aliquam lorem. Suspendisse ac velit iaculis, volutpat
							ante id, mattis ante. Phasellus pretium elit nec tincidunt cursus
						</div>
						<div className="imageCareer lg:pl-4 pt-4 lg:pt-0 justify-center lg:justify-end flex md:flex">
							<div
								className="grid grid-cols-1 gap-x-[10px]"
								style={{
									border: '10px solid var(--lightskyblue)',
									backgroundColor: 'var(--lightskyblue)',
									borderRadius: '1rem',
									overflow: 'hidden',
								}}
							>
								<Image
									src="/support/images/careers/collage-2.png"
									alt="Career Image"
									width={800}
									height={600}
									style={{
										objectFit: 'cover',
										objectPosition: 'top',
									}}
								/>
							</div>
						</div>
					</div>
					<span style={{ fontSize: '.85rem' }}>
						<b style={{ color: 'var(--darkblue)' }}>
							<span style={{ color: 'darkred' }}>*&nbsp;</span>Working Hours:
						</b>
						&nbsp;<b>08.30 - 17.30 WIB</b>
					</span>

					{/* JOB OPENINGS */}
					{jobsData.map((data: JobData, i: number) => (
						<JobList
							key={`${data.position_name}_${i}`}
							title={data.position_name}
							department={data.department_name}
							employmentType={data.employment_type}
							location={data.location}
							keyRes={data.key_responsibility}
							requirements={data.requirements}
							applyEmail={data.apply_email}
						/>
					))}

					{/* IF NO OPENINGS */}
					<NoJob count={jobLen} />

					<hr className="mt-4 mb-4" style={{ color: 'var(--darkblue)' }} />
				</main>
			</div>
		</div>
	);
}
