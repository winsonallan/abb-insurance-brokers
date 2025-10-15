'use client';

import '../../../public/support/css/our-team.css';

import Image from 'next/image';
import TeamPerson from '@/components/teamPerson';
import { apiURL } from '../../../public/support/js/webState.js';

async function fetchExecutives() {
	const data = await fetch(`${apiURL}team/executives`, {
		method: 'GET',
	});
	const dataJSON = await data.json();

	return dataJSON;
}

async function fetchSupervisors() {
	const data = await fetch(`${apiURL}team/supervisors`, {
		method: 'GET',
	});
	const dataJSON = await data.json();

	return dataJSON;
}

const { data: executivesData } = await fetchExecutives();
const { data: supervisorsData } = await fetchSupervisors();

export default function OurTeamClient() {
	return (
		<div className="pageContent">
			<div className="page-container">
				<main
					className="content-wrap"
					style={{
						alignContent: 'center',
					}}
				>
					<div className="teamContainer" style={{ textAlign: 'center' }}>
						<h2 className="text-2xl pb-4" style={{ color: 'var(--mainblue)' }}>
							<b>Supervisory Board</b>
						</h2>
						<TeamPerson groupData={supervisorsData} />
						<h2 className="text-2xl pb-4" style={{ color: 'var(--mainblue)' }}>
							<b>Executive Board</b>
						</h2>
						<TeamPerson groupData={executivesData} />
					</div>
				</main>
			</div>
		</div>
	);
}
