'use client';

import { useState } from 'react';
import CareerItem from '@/components/admin-control-panel/careerItem';
import CarouselItem from '@/components/admin-control-panel/carouselItem';
import OverlayCareers from '@/components/admin-control-panel/popup-forms/overlayCareers';
import OverlayCarousel from '@/components/admin-control-panel/popup-forms/overlayCarousel';
import OverlayTeam from '@/components/admin-control-panel/popup-forms/overlayTeam';
import TeamItem from '@/components/admin-control-panel/teamItem';
import { apiURL, imagesURL } from '../../../public/support/js/webState';

interface carouselProps {
	id: number;
	caption_en: string;
	caption_id: string;
	description_en: string;
	description_id: string;
	display_order: number;
	image_path: string;
}

interface jobsProps {
	position_name: string;
	department_name: string;
	employment_type: string;
	location: string;
	key_responsibility_en: string;
	requirements_en: string;
	key_responsibility_id: string;
	requirements_id: string;
	apply_email: string;
}

interface boardProps {
	id: number;
	name: string;
	path_url: string;
	position_en: string;
	position_id: string;
	description_en: string;
	description_id: string;
}

export default function AdminPanelClient({
	carouselData,
	jobsData,
	boardData,
}: {
	carouselData: carouselProps[];
	jobsData: jobsProps[];
	boardData: boardProps[];
}) {
	const [showCarouselForm, setShowCarouselForm] = useState(false);
	const [showTeamForm, setShowTeamForm] = useState(false);
	const [showJobsForm, setShowJobsForm] = useState(false);

	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<h1 className="text-3xl mb-12" style={{ color: 'var(--mainblue)' }}>
						<b>Editor Control Panel</b>
					</h1>
					<div className="editNews">
						<h1 className="text-xl mb-2" style={{ color: 'var(--darkblue)' }}>
							<b>News</b>
						</h1>
						<div
							className="w-full mb-8"
							style={{
								alignContent: 'center',
								justifyContent: 'center',
							}}
						>
							<a href="/admin-control-panel/news">
								Click here&nbsp;&nbsp;
								<i className="fas fa-external-link"></i>
							</a>
						</div>
					</div>

					<div className="addEditor mb-8">
						<form action="">
							<h1 className="text-xl mb-2" style={{ color: 'var(--darkblue)' }}>
								<b>Add Editor</b>
							</h1>
							<div className="flex mt-2 mb-2" style={{ alignItems: 'center' }}>
								<label htmlFor="editorName" className="font-bold">
									Name
								</label>
								<input
									type="text"
									name=""
									id="editorName"
									className="ml-5 w-[500px] px-2 py-1 border-2 border-[var(--lightskyblue)] rounded"
								/>
							</div>
							<div className="flex mt-2 mb-2" style={{ alignItems: 'center' }}>
								<label htmlFor="editorUsername" className="font-bold">
									Username
								</label>
								<input
									type="text"
									name=""
									id="editorUsername"
									className="ml-5 w-[500px] px-2 py-1 border-2 border-[var(--lightskyblue)] rounded"
								/>
							</div>
							<div className="flex mt-2 mb-2" style={{ alignItems: 'center' }}>
								<label htmlFor="editorPassword" className="font-bold">
									Password
								</label>
								<input
									type="password"
									name=""
									id="editorPassword"
									className="ml-5 w-[500px] px-2 py-1 border-2 border-[var(--lightskyblue)] rounded"
								/>
							</div>

							<button
								type="submit"
								className="font-bold p-2 cursor-pointer"
								style={{
									backgroundColor: 'var(--darkblue)',
									color: 'white',
									borderRadius: '5px',
								}}
							>
								Submit
							</button>
						</form>
					</div>
					<div className="editCarouselDiv mb-8 relative">
						<OverlayCarousel
							state={showCarouselForm}
							stateFunction={setShowCarouselForm}
						/>

						<div
							className="w-full flex flex-row mb-2"
							style={{
								alignContent: 'center',
								justifyContent: 'space-between',
							}}
						>
							<h1 className="text-xl" style={{ color: 'var(--darkblue)' }}>
								<b>Homepage Carousel</b>
							</h1>
							<button
								type="button"
								style={{ color: 'var(--linkblue)' }}
								className="cursor-pointer"
								onClick={() => {
									setShowCarouselForm(true);
								}}
							>
								<u>Add Carousel Item</u>&nbsp;&nbsp;
								<i className="fas fa-plus"></i>
							</button>
						</div>
						<div className="flex flex-row gap-x-3 overflow-x-auto w-full pb-4">
							{carouselData.map((src: carouselProps, i: number) => (
								<CarouselItem
									key={`carousel__${i}`}
									fileName={src.image_path}
									heading_id={src.caption_id}
									heading_en={src.caption_en}
									text_id={src.description_id}
									text_en={src.description_en}
									fileURL={`${imagesURL}carousel/${src.image_path}`}
								/>
							))}
						</div>
					</div>
					<div className="editTeam relative">
						<OverlayTeam state={showTeamForm} stateFunction={setShowTeamForm} />
						<div
							className="w-full flex flex-row mb-2"
							style={{
								alignContent: 'center',
								justifyContent: 'space-between',
							}}
						>
							<h1 className="text-xl" style={{ color: 'var(--darkblue)' }}>
								<b>Team</b>
							</h1>
							<button
								type="button"
								style={{ color: 'var(--linkblue)' }}
								className="cursor-pointer"
								onClick={() => {
									setShowTeamForm(true);
								}}
							>
								<u>Add Team Member</u>&nbsp;&nbsp;
								<i className="fas fa-plus"></i>
							</button>
						</div>
						<div className="flex flex-row gap-x-3 overflow-x-auto w-full mb-8 pb-4">
							{boardData.map((src, i) => (
								<TeamItem
									key={`board__${i}`}
									fileName={src.path_url}
									name={src.name}
									position_en={src.position_en}
									position_id={src.position_id}
									bio_en={src.description_en}
									bio_id={src.description_id}
									fileURL={`${imagesURL}our-team/${src.path_url}`}
								/>
							))}
						</div>
					</div>
					<div className="editCareers relative">
						<OverlayCareers
							state={showJobsForm}
							stateFunction={setShowJobsForm}
						/>
						<div
							className="w-full flex flex-row mb-2"
							style={{
								alignContent: 'center',
								justifyContent: 'space-between',
							}}
						>
							<h1 className="text-xl" style={{ color: 'var(--darkblue)' }}>
								<b>Careers</b>
							</h1>
							<button
								type="button"
								style={{ color: 'var(--linkblue)' }}
								className="cursor-pointer"
								onClick={() => {
									setShowJobsForm(true);
								}}
							>
								<u>Add Job Listing</u>&nbsp;&nbsp;
								<i className="fas fa-plus"></i>
							</button>
						</div>
						<div className="flex flex-row gap-x-3 overflow-x-auto w-full mb-8 pb-4">
							{jobsData.map((src, i) => (
								<CareerItem
									key={`career__${i}`}
									title={src.position_name}
									department={src.department_name}
									type={src.employment_type}
									location={src.location}
									key_res_en={src.key_responsibility_en}
									key_res_id={src.key_responsibility_id}
									requirements_en={src.requirements_en}
									requirements_id={src.requirements_id}
									email={src.apply_email}
								/>
							))}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
