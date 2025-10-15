import type { Metadata } from 'next';

import OurTeamClient from './clientPage';

export const metadata: Metadata = {
	title: 'Our Team | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

export default function OurTeam() {
	return <OurTeamClient />;
}
