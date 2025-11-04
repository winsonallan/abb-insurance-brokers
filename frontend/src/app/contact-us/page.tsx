import '../../../public/support/css/contact-us.css';
import type { Metadata } from 'next';
import ContactUsClient from './clientPage';

export const metadata: Metadata = {
	title: 'Contact Us | ABB Insurance Brokers',
	description:
		'Get in touch with ABB Insurance Brokers for expert advice, insurance inquiries, and support to find the best coverage for your needs.',
	keywords: [
		'contact ABB Insurance Brokers',
		'insurance inquiries',
		'insurance support',
		'customer service',
		'insurance advice',
	],
	robots: 'index, follow',
	authors: [{ name: 'ABB Insurance Brokers' }],
};

export default function ContactUs() {
	return <ContactUsClient />;
}
