import type { Metadata } from 'next';
import RiskManagementClient from './clientPage';

export const metadata: Metadata = {
	title: 'Risk Management | ABB Insurance Brokers',
	description: `Comprehensive risk management services: contract & tender review, risk profiling, mitigation strategy, and custom insurance placement to protect assets and support growth.`,
};

export default function RiskManagement() {
	return <RiskManagementClient />;
}
