import type { Metadata } from 'next';
import RiskManagementClient from './clientPage';

export const metadata: Metadata = {
	title: 'Risk Management | ABB Insurance Brokers',
	description:
		'Comprehensive risk management services including contract & tender review, risk profiling, mitigation strategies, and tailored insurance solutions to protect assets and support business growth.',
	keywords: [
		'risk management',
		'insurance risk',
		'risk mitigation',
		'contract review',
		'tender review',
		'insurance brokers Indonesia',
		'ABB Insurance Brokers',
	],
	robots: 'index, follow',
	authors: [{ name: 'ABB Insurance Brokers' }],
};

export default function RiskManagement() {
	return <RiskManagementClient />;
}
