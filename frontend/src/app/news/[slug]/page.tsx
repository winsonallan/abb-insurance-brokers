import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { JSDOM } from 'jsdom';

import type { Metadata } from 'next';
import Image from 'next/image';
import NewsCarousel from '@/components/newsCarousel';
import NewsExtraSmallBox from '@/components/newsExtraSmallBox';

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

async function getRandomNews(slug: string, num: number): Promise<News | null> {
	const res = await fetch(`${apiURL}news/random/${slug}/${num}`, {
		next: { revalidate: 60 },
	});

	if (!res.ok) return null;
	const { data } = await res.json();
	return data;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const news = await getNews(slug);

	if (!news) {
		return {
			title: 'News not found | My Website',
			description: 'The news article could not be found.',
		};
	}

	return {
		title: `${news.title} | My Website`,
		description: news.content.slice(0, 150), // or whatever preview you want
	};
}

export default async function NewsDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const news = await getNews(slug);
	const moreNews = await getRandomNews(slug, 5);

	if (news) {
		const imagesData = JSON.parse(news.images);
		const safeHTML = purify.sanitize(news.content);

		return (
			<div className="pageContent">
				<div className="page-container pl-12 pr-12 md:pl-36 md:pr-36 lg:pl-48 lg:pr-48 xl:pl-52 xl:pr-52">
					<main className="content-wrap">
						<div className="grid grid-cols-8 w-full">
							<div className="col-span-8 grid grid-cols-8">
								<div className="w-full pr-8 col-span-8">
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
									<div className="grid grid-cols-8 w-full">
										<div className="col-span-5">
											<NewsCarousel imagesData={imagesData} />
											<br />
											<article
												className="prose text-justify"
												style={{ lineHeight: '1.5' }}
											>
												{parse(safeHTML)}
											</article>
										</div>
										<div className="col-span-3 pl-12">
											<div
												style={{
													justifyContent: 'space-between',
													alignItems: 'center',
												}}
											>
												<h1
													className="text-2xl font-bold"
													style={{
														color: 'var(--darkblue)',
														textAlign: 'right',
													}}
												>
													Read More
												</h1>
												<hr
													className="w-full mt-2 mb-4"
													style={{ borderTop: '2px solid var(--mainblue)' }}
												/>
												<div className="w-full grid grid-cols-1 gap-y-4">
													<NewsExtraSmallBox
														author="Joe Doe"
														date="21 October 2024"
														title="New Range Rover Just Got Released! How Does It Compare To Other Cars of Similar Price Points?"
														img_url="2.jpeg"
														page_url=" "
													/>
													<NewsExtraSmallBox
														author="Jane Doe"
														date="12 October 2024"
														title="The Spanish Government Has Just Started A Tourism Program... Is It A Good One?"
														img_url="3.jpg"
														page_url=" "
													/>
													<NewsExtraSmallBox
														author="Jack Doe"
														date="12 October 2024"
														title="Medication Prices Hit All Time High Thanks To Donald Trump"
														img_url="4.jpeg"
														page_url=" "
													/>
													<NewsExtraSmallBox
														author="Jane Doe"
														date="12 October 2024"
														title="The Spanish Government Has Just Started A Tourism Program... Is It A Good One?"
														img_url="3.jpg"
														page_url=" "
													/>
													<NewsExtraSmallBox
														author="Jack Doe"
														date="12 October 2024"
														title="Medication Prices Hit All Time High Thanks To Donald Trump"
														img_url="4.jpeg"
														page_url=" "
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
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
