import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@fortawesome/fontawesome-free/css/all.css';

// Load the font
const inter = Inter({
	subsets: ['latin'], // choose subsets you need
	display: 'swap', // prevents invisible text while font loads
	variable: '--font-inter', // optional: use as CSS variable
});

export const metadata: Metadata = {
	title: 'ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
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
