import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@fortawesome/fontawesome-free/css/all.css';

import './globals.css';
import 'aos/dist/aos.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

// Load the font
const inter = Inter({
	subsets: ['latin'], // choose subsets you need
	display: 'swap', // prevents invisible text while font loads
	variable: '--font-inter', // optional: use as CSS variable
});

export const metadata: Metadata = {
	title: 'Welcome | ABB Insurance Brokers',
	description:
		'PT. ABB Insurance Brokers is a licensed and OJK-regulated insurance brokerage providing strategic, transparent, and client-focused solutions. We help organizations manage risk with confidence, protect what matters most, and deliver measurable value.',
	keywords: [
		'ABB Insurance Brokers',
		'insurance brokers Indonesia',
		'risk management',
		'insurance solutions',
		'OJK regulated',
		'strategic insurance',
		'client-focused insurance',
	],
	robots: 'index, follow',
	authors: [{ name: 'ABB Insurance Brokers' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased ${inter.className}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
