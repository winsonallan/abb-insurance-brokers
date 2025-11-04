import type { Metadata } from 'next';
import InsuranceManagementClient from './clientPage';

export const metadata: Metadata = {
	title: 'Insurance Management | ABB Insurance Brokers',
	description:
		'Insurance management solutions by ABB Insurance Brokers, offering transparent, strategic, and long-term coverage planning for businesses and individuals.',
	keywords: [
		'insurance management',
		'insurance solutions',
		'business insurance',
		'coverage planning',
		'ABB Insurance Brokers',
	],
	robots: 'index, follow',
	authors: [{ name: 'ABB Insurance Brokers' }],
};

export default function InsuranceManagement() {
	return <InsuranceManagementClient />;
}
