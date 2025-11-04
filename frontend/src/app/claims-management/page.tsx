import type { Metadata } from 'next';
import ClaimsManagementClient from './clientPage';

export const metadata: Metadata = {
	title: 'Claims Management | ABB Insurance Brokers',
	description:
		'ABB Insurance Brokers Claims Management services ensure smooth, transparent, and efficient processing from first notice of loss to final settlement.',
	keywords: [
		'claims management',
		'insurance claims',
		'claims processing',
		'ABB Insurance Brokers',
		'insurance support',
	],
	robots: 'index, follow',
	authors: [{ name: 'ABB Insurance Brokers' }],
};

export default function ClaimsManagement() {
	return <ClaimsManagementClient />;
}
