'use client';

import AOS from 'aos';
import Image from 'next/image';
import { useEffect } from 'react';
import JobList from '@/components/jobList';
import MainPoint from '@/components/mainPoint';
import NoJob from '@/components/noJob';
import { apiURL, imagesURL } from '../../../public/support/js/webState';

interface JobData {
	position_name: string;
	department_name: string;
	employment_type: string;
	location: string;
	key_responsibility_en: string;
	key_responsibility_id: string;
	requirements_en: string;
	requirements_id: string;
	apply_email: string;
}

export default function CareerClient({
	jobsData,
	jobLen,
}: {
	jobsData: JobData[];
	jobLen: number;
}) {
	useEffect(() => {
		AOS.init({ duration: 800, once: true, offset: 80 });
	}, []);

	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<MainPoint pointText="Join Us Into Making Insurance As Accessible As Possible" />

					<div
						className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-4"
						style={{ justifyContent: 'space-between' }}
					>
						<div className="textCareer lg:pr-4" data-aos="fade-right">
							At ABB Insurance Brokers, we believe that insurance should be
							understandable, attainable, and genuinely valuable for everyone —
							not a maze of paperwork and uncertainty. Our mission is to
							simplify protection by translating complex risks into clear,
							actionable solutions that empower both individuals and
							organizations to make confident decisions. <br />
							<br />
							When you join ABB, you become part of a collaborative and
							forward-thinking team that values integrity, curiosity, and
							continuous learning. We encourage innovation, celebrate diverse
							perspectives, and invest in helping every team member reach their
							potential. Whether you're an experienced professional or just
							beginning your journey, you'll find opportunities to grow,
							contribute meaningfully, and see your work make a tangible
							difference in people's lives. <br />
							<br />
							Together, we're redefining how insurance serves society —
							transforming it from a product people buy into a partnership they
							trust.
						</div>
						<div
							className="imageCareer lg:pl-4 pt-4 lg:pt-0 justify-center lg:justify-end flex md:flex"
							data-aos="fade-left"
						>
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
									src={`${imagesURL}careers/collage-2.png`}
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
					<span style={{ fontSize: '.85rem' }} data-aos="fade-right">
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
							keyResEN={data.key_responsibility_en}
							keyResID={data.key_responsibility_id}
							requirementsEN={data.requirements_en}
							requirementsID={data.requirements_id}
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
