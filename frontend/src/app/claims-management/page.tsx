import type { Metadata } from 'next';
import ClaimsManagementClient from './clientPage';

export const metadata: Metadata = {
	title: 'Claims Management | ABB Insurance Brokers',
	description: 'ABB Insurance Brokers - Claims Management',
};

export default function ClaimsManagement() {
	return <ClaimsManagementClient />;
}
