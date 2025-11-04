import type { Metadata } from 'next';
import { apiURL } from '../../../public/support/js/webState.js';
import NewsClient from './clientPage';

export const metadata: Metadata = {
	title: 'News | ABB Insurance Brokers',
	description:
		'Latest updates, insights, and industry news from ABB Insurance Brokers, keeping you informed about insurance trends, products, and services.',
	keywords: [
		'insurance news',
		'industry updates',
		'insurance insights',
		'ABB Insurance Brokers',
		'insurance trends Indonesia',
	],
	robots: 'index, follow',
	authors: [{ name: 'ABB Insurance Brokers' }],
};

async function getNews(): Promise<News | null> {
	try {
		const res = await fetch(`${apiURL}news`, {
			next: { revalidate: 60 }, // optional: ISR caching
		});

		const { data } = await res.json();

		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function News() {
	const news = await getNews();

	return <NewsClient news={news} />;
}
