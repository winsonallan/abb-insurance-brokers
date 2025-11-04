import type { Metadata } from 'next';
import '../../../public/support/css/admin-control-panel.css';
import { apiURL } from '../../../public/support/js/webState';
import AdminPanelClient from './clientPage';

export const metadata: Metadata = {
	title: 'Admin Login | ABB Insurance Brokers',
	description:
		'Secure admin login page for ABB Insurance Brokers internal access and management.',
	keywords: [
		'admin login',
		'ABB Insurance Brokers admin',
		'secure login',
		'internal access',
	],
	robots: 'noindex, nofollow',
	authors: [{ name: 'ABB Insurance Brokers' }],
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
