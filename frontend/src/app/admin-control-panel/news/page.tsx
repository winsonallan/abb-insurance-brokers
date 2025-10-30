import type { Metadata } from 'next';
import { apiURL } from '../../../../public/support/js/webState.js';

import ClientAdminNewsPanel from './clientPage';

export const metadata: Metadata = {
	title: 'Admin News Panel | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

interface articleProps {
	author: string;
	content_en: string;
	content_id: string;
	created_at: Date;
	id: number;
	images: string;
	slug: string;
	status: string;
	title_en: string;
	title_id: string;
	updated_at: Date;
}

async function getNews(): Promise<News | null> {
	try {
		const res = await fetch(`${apiURL}news`, {
			next: { revalidate: 60 }, // optional: ISR caching
		});

		const { data } = await res.json();
		const modifData = data.map((src: articleProps, i: number) => {
			src.images = src.images ? JSON.parse(src.images) : '';

			return src;
		});
		const finData = [{}, ...modifData];
		console.log(finData);
		return finData;
	} catch (error) {
		console.log(error);
	}
}

const news = await getNews();

export default function AdminNewsPanel() {
	return <ClientAdminNewsPanel news={news} />;
}
