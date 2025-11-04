import type { Metadata } from 'next';
import { apiURL, imagesURL } from '../../../public/support/js/webState';
import CareerClient from './clientPage';

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
		<CareerClient jobLen={jobLen} jobsData={jobsData}/>
	);
}
