import type { Metadata } from 'next';
import InsuranceManagementClient from './clientPage';

export const metadata: Metadata = {
	title: 'Insurance Management | ABB Insurance Brokers',
	description: 'ABB Insurance Brokers - Insurance Management',
};

export default function InsuranceManagement() {
	return <InsuranceManagementClient />;
}
