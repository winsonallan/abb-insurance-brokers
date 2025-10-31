import type { Metadata } from 'next';
import '../../../public/support/css/admin-control-panel.css';
import CareerItem from '@/components/admin-control-panel/careerItem';
import CarouselItem from '@/components/admin-control-panel/carouselItem';
import OverlayCareers from '@/components/admin-control-panel/popup-forms/overlayCareers';
import OverlayCarousel from '@/components/admin-control-panel/popup-forms/overlayCarousel';
import OverlayTeam from '@/components/admin-control-panel/popup-forms/overlayTeam';
import TeamItem from '@/components/admin-control-panel/teamItem';
import { apiURL, imagesURL } from '../../../public/support/js/webState';
import AdminPanelClient from './clientPage';

export const metadata: Metadata = {
	title: 'Admin Control Panel | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

export async function getCarousel() {
	const res = await fetch(`${apiURL}misc-images/carousels`, {
		method: 'GET',
		credentials: 'include',
	});

	const { data } = await res.json();
	return data;
}

async function fetchAllBoard() {
	const res = await fetch(`${apiURL}team`, {
		method: 'GET',
	});
	const { data } = await res.json();

	return data;
}

const fetchAllJobs = async () => {
	try {
		const res = await fetch(`${apiURL}career-posts`, {
			method: 'GET',
		});

		const { data } = await res.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

const jobsData = await fetchAllJobs();
const carouselData = await getCarousel();
const boardData = await fetchAllBoard();

export default function AdminControlPanel() {
	return (
		<AdminPanelClient
			jobsData={jobsData}
			carouselData={carouselData}
			boardData={boardData}
		/>
	);
}
