import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import { JSDOM } from 'jsdom';

import NewsCarousel from '@/components/newsCarousel';
import NewsExtraSmallBox from '@/components/newsExtraSmallBox';
import { timeConverter } from '../../../../public/support/js/timeConverter.js';
import { apiURL } from '../../../../public/support/js/webState.js';

interface News {
	id: number;
	title_en: string;
	title_id: string;
	slug: string;
	images: string;
	content: string;
	author: string;
	created_at: string;
	updated_at: string;
}

interface Content {
	en: string;
	id: string;
}

const window = new JSDOM('').window;
const purify = DOMPurify(window);

async function getNews(slug: string): Promise<News | null> {
	const res = await fetch(`${apiURL}news/${slug}`, {
		next: { revalidate: 60 },
	});
	if (!res.ok) return null;
	const { data } = await res.json();
	return data;
}

async function getRandomNews(
	slug: string,
	num: number,
): Promise<News[] | null> {
	const res = await fetch(`${apiURL}news/random/${slug}/${num}`, {
		next: { revalidate: 60 },
	});
	if (!res.ok) return null;
	const { data } = await res.json();
	return data;
}

function parseContent(news: string | null): Content {
	if (!news) {
		return {
			en: 'The news article could not be found...',
			id: 'Gagal menemukan artikel yang dibutuhkan...',
		};
	}

	try {
		// Try to parse JSON — works if it's actually stored as JSON
		return JSON.parse(news);
	} catch {
		// Otherwise, assume it's a plain string (like longtext)
		return { en: news, id: news };
	}
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const news = await getNews(slug);
	const contentJSON = parseContent(news?.content ?? null);

	return {
		title: `${news ? news.title_en : 'Article Not Found'} | ABB Insurance Brokers`,
		description: contentJSON.en.slice(0, 150),
	};
}

export default async function NewsDetail({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const news = await getNews(slug);
	const moreNews = await getRandomNews(slug, 5);
	console.log(moreNews);

	if (!news) {
		return (
			<div className="pageContent">
				<div className="page-container px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36">
					<main className="content-wrap py-8 text-center">
						<h1>News of {slug} is not found!</h1>
					</main>
				</div>
			</div>
		);
	}

	let imagesData = { cover: '', others: [] };
	try {
		imagesData = JSON.parse(news.images);
	} catch {
		console.warn('Invalid image JSON, using fallback.');
	}

	const contentData = parseContent(news.content);
	const safeHTML = purify.sanitize(contentData.en.replace(/\\n/g, '<br/>'));

	return (
		<div className="pageContent">
			<div className="page-container px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36">
				<main className="content-wrap py-8">
					{/* HEADER */}
					<div className="mb-6">
						<h1 className="text-2xl sm:text-3xl font-bold text-[var(--darkblue)]">
							{news.title_en}
						</h1>
						<p className="font-bold text-[var(--mainblue)] text-sm sm:text-base">
							by {news.author} | {timeConverter(news.created_at)}
						</p>
					</div>

					{/* GRID LAYOUT */}
					<div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
						{/* LEFT MAIN CONTENT */}
						<div
							className={
								moreNews?.length > 0
									? 'lg:col-span-5 space-y-6'
									: 'col-span-8 space-y-6'
							}
						>
							<NewsCarousel imagesData={imagesData} />

							<article
								className="prose max-w-none text-justify leading-relaxed"
								style={{ color: 'var(--darkblue)' }}
							>
								{parse(safeHTML)}
							</article>
						</div>

						{/* SIDEBAR - READ MORE */}
						{moreNews?.length > 0 ? (
							<div className="lg:col-span-3">
								<div className="flex flex-col">
									<h1 className="text-xl sm:text-2xl font-bold text-[var(--darkblue)] text-right lg:text-left">
										Read More
									</h1>
									<hr className="w-full mt-2 mb-4 border-t-2 border-[var(--mainblue)]" />
									<div className="grid gap-4">
										{moreNews
											? moreNews.map((item) => {
													let img = 'default.jpg';
													try {
														img = JSON.parse(item.images).cover;
													} catch {}
													return (
														<NewsExtraSmallBox
															key={item.id}
															author={item.author}
															date={timeConverter(item.created_at)}
															title={item.title_en}
															img_url={img}
															page_url={`/news/${item.slug}`}
														/>
													);
												})
											: [1, 2, 3].map((i) => (
													<NewsExtraSmallBox
														key={i}
														author="Jane Doe"
														date="12 October 2024"
														title="Sample article"
														img_url="3.jpg"
														page_url="#"
													/>
												))}
									</div>
								</div>
							</div>
						) : (
							''
						)}
					</div>
				</main>
			</div>
		</div>
	);
}
