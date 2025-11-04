import type { Metadata } from 'next';
import { apiURL } from '../../../public/support/js/webState.js';
import NewsClient from './clientPage';

export const metadata: Metadata = {
	title: 'News | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
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
