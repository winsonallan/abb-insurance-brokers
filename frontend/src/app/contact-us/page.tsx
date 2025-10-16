import '../../../public/support/css/contact-us.css';
import type { Metadata } from 'next';
import ContactUsClient from './clientPage';

export const metadata: Metadata = {
	title: 'Contact Us | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

export default function ContactUs() {
	return <ContactUsClient />;
}
