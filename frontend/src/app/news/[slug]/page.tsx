import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { JSDOM } from 'jsdom';

import Image from 'next/image';
import NewsCarousel from '@/components/newsCarousel';

import { timeConverter } from '../../../../public/support/js/timeConverter.js';
import { apiURL } from '../../../../public/support/js/webState.js';

interface News {
	id: number;
	title: string;
	slug: string;
	images: string;
	content: string;
	author: string;
	created_at: string;
	updated_at: string;
}

const window = new JSDOM('').window;
const purify = DOMPurify(window);

async function getNews(slug: string): Promise<News | null> {
	const res = await fetch(`${apiURL}news/${slug}`, {
		next: { revalidate: 60 }, // optional: ISR caching
	});

	if (!res.ok) return null;
	const { data } = await res.json();
	return data;
}

export default async function NewsDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const news = await getNews(slug);
	if (news) {
		const imagesData = JSON.parse(news.images);
		const safeHTML = purify.sanitize(news.content);

		return (
			<div className="pageContent">
				<div className="page-container pl-12 pr-12 md:pl-36 md:pr-36 lg:pl-48 lg:pr-48 xl:pl-52 xl:pr-52">
					<main className="content-wrap">
						<h1
							className="text-3xl font-bold"
							style={{ color: 'var(--darkblue)' }}
						>
							{news.title}
						</h1>
						<p className="font-bold" style={{ color: 'var(--mainblue)' }}>
							by {news.author} | {timeConverter(news.created_at)}
						</p>
						<br />
						<NewsCarousel imagesData={imagesData} />
						<br />
						<article
							className="prose text-justify"
							style={{ lineHeight: '1.5' }}
						>
							{parse(safeHTML)}
						</article>
					</main>
				</div>
			</div>
		);
	}

	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12 md:pl-36 md:pr-36 lg:pl-48 lg:pr-48 xl:pl-52 xl:pr-52">
				<main className="content-wrap">
					<h1>News of {slug} is not found!</h1>
				</main>
			</div>
		</div>
	);
}
