'use client';

import { useState } from 'react';
import NewsEditor from '@/components/admin-control-panel/news/newsEditor';
import NewsItem from '@/components/admin-control-panel/news/newsItem';
import OverlayAddNews from '@/components/admin-control-panel/news/overlayAddNews';

interface articleProps {
	author: string;
	content_en: string;
	content_id: string;
	created_at: Date;
	id: number;
	images: { cover: string; others: string[] };
	slug: string;
	status: string;
	title_en: string;
	title_id: string;
	updated_at: Date;
}

interface newsProps {
	news: articleProps[];
}

export default function ClientAdminNewsPanel({ news }: newsProps) {
	const [showAddArticlePopup, setAddArticlePopup] = useState(false);
	const [pickedArticle, setPickedArticle] = useState(0);

	return (
		<>
			<OverlayAddNews
				showAddArticle={showAddArticlePopup}
				stateFunction={setAddArticlePopup}
			/>

			<div className="pageContent">
				<div className="page-container pl-12 pr-12">
					<main className="content-wrap">
						<h1 className="text-3xl mb-12" style={{ color: 'var(--mainblue)' }}>
							<b>News Panel</b>
						</h1>

						<button
							type="button"
							className="py-1 px-2 font-bold mb-5 cursor-pointer"
							style={{
								backgroundColor: 'var(--superlightblue)',
								borderRadius: '5px',
							}}
							onClick={() => {
								setAddArticlePopup(true);
							}}
						>
							Add New Article <i className="fa-solid fa-plus"></i>
						</button>

						<div className="grid grid-cols-4">
							<div
								className="flex flex-col gap-y-4 mr-5 overflow-y-auto pr-5"
								style={{ height: '800px', maxHeight: '800px' }}
							>
								{news.map((article: articleProps, i: number) =>
									i !== 0 ? (
										<NewsItem
											title={article.title_en}
											status={article.status}
											id={article.id}
											pickedArticle={pickedArticle}
											setPickedArticle={setPickedArticle}
											key={`article_${i}`}
										/>
									) : (
										''
									),
								)}
							</div>
							{pickedArticle === 0 ? (
								''
							) : (
								<NewsEditor
									slug={news[pickedArticle].slug}
									title_en={news[pickedArticle].title_en}
									title_id={news[pickedArticle].title_id}
									content_en={news[pickedArticle].content_en}
									content_id={news[pickedArticle].content_id}
									imagesData={news[pickedArticle].images}
									id={pickedArticle}
								/>
							)}
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
