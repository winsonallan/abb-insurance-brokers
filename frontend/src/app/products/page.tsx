import '../../../public/support/css/homepage.css';
import type { Metadata } from 'next';
import ProductClient from './clientPage';

export const metadata: Metadata = {
	title: 'Our Products & Services | ABB Insurance Brokers',
	description:
		'Discover ABB Insurance Brokers’ range of insurance products and services. Compare trusted insurance solutions for life, property, travel, and risk management, tailored to your needs with transparency and confidence.',
	keywords: [
		'insurance products',
		'insurance services',
		'risk management',
		'claims management',
		'life insurance',
		'property insurance',
		'travel insurance',
		'insurance brokers Indonesia',
		'ABB Insurance Brokers',
	],
	robots: 'index, follow',
	authors: [{ name: 'ABB Insurance Brokers' }],
};

export default function Products() {
	return <ProductClient />;
}
