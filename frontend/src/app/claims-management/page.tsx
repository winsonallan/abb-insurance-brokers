import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Claims Management | ABB Insurance Brokers',
	description: 'ABB Insurance Brokers - Claims Management',
};

export default function ClaimsManagement() {
	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">Claims Management</main>
			</div>
		</div>
	);
}
