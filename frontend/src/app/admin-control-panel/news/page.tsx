import type { Metadata } from 'next';
import NewsEditor from '@/components/admin-control-panel/news/newsEditor';
import NewsItem from '@/components/admin-control-panel/news/newsItem';

export const metadata: Metadata = {
	title: 'Admin News Panel | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

const imagesArr = [{ img_url: '1.jpeg' }];

export default function AdminNewsPanel() {
	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<h1 className="text-3xl mb-12" style={{ color: 'var(--mainblue)' }}>
						<b>News Panel</b>
					</h1>

					<div className="grid grid-cols-4">
						<div
							className="flex flex-col gap-y-4 mr-5 overflow-y-auto"
							style={{ height: '800px', maxHeight: '800px' }}
						>
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
							<NewsItem title="This is the title" status="Published" />
							<NewsItem title="This is the title 2" status="Published" />
						</div>
						<NewsEditor
							title="This is the title"
							content="This is the content"
							imagesData={imagesArr}
						></NewsEditor>
					</div>
				</main>
			</div>
		</div>
	);
}
