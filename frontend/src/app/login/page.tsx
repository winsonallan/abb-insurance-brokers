import '../../../public/support/css/contact-us.css';
import type { Metadata } from 'next';
import LoginClient from './clientPage';

export const metadata: Metadata = {
	title: 'Admin Login | ABB Insurance Brokers',
	description: 'Admin login page.',
};

export default function Login() {
	return <LoginClient />;
}
