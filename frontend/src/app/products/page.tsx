import '../../../public/support/css/homepage.css';
import type { Metadata } from 'next';
import ProductClient from './clientPage';

export const metadata: Metadata = {
	title: 'Our Products & Services | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options with clarity and confidence.',
};

export default function Products() {
	return <ProductClient/>
}
