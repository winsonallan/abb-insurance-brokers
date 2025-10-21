import type { Metadata } from 'next';
import Image from 'next/image';

import NewsSmallBox from '@/components/newsSmallBox';

export const metadata: Metadata = {
	title: 'News | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

export default function News() {
	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12 md:pl-36 md:pr-36 lg:pl-48 lg:pr-48 xl:pl-52 xl:pr-52">
				<main className="content-wrap">
					<div className="flex w-full mb-8">
						<div className="w-1/2 xl:w-2/9" style={{ alignContent: 'center' }}>
							<h1 className="text-3xl" style={{ color: 'var(--mainblue)' }}>
								<b>Latest Articles</b>
							</h1>
						</div>
						<div className="w-1/2 xl:w-7/9" style={{ alignContent: 'center' }}>
							<hr style={{ borderTop: '2px solid var(--mainblue)' }} />
						</div>
					</div>
					<div className="latestNews grid grid-cols-1 2xl:grid-cols-2 gap-8 text-white">
						{/* Big Cover */}
						<div
							className="row-span-3 bg-[var(--darkblue)]"
							style={{
								border: '1px solid white',
								borderRadius: '.5rem',
							}}
						>
							<div className="imageDiv w-full h-[620px] relative mb-2">
								<Image
									className="latestBigImage"
									src="/support/images/news/1.jpeg"
									alt="Career Image"
									fill
									style={{
										objectFit: 'cover',
										objectPosition: 'top',
										borderTopLeftRadius: '.5rem',
										borderTopRightRadius: '.5rem',
									}}
								/>
							</div>
							<div className="font-bold p-4">
								<span className="text-sm">John Doe | 23 October 2024</span>
								<br />
								<span className="text-lg">
									Bitcoin Is Being Treated Just Like Gold
								</span>
							</div>
						</div>

						{/* Misc Cover */}
						<div
							className="row-span-3 flex flex-col gap-y-8"
							style={{ justifyContent: 'space-between' }}
						>
							<NewsSmallBox
								author="Joe Doe"
								date="21 October 2024"
								title="New Range Rover Just Got Released! How Does It Compare To Other Cars of Similar Price Points?"
								img_url="2.jpeg"
								page_url=" "
							/>
							<NewsSmallBox
								author="Jane Doe"
								date="12 October 2024"
								title="The Spanish Government Has Just Started A Tourism Program... Is It A Good One?"
								img_url="3.jpg"
								page_url=" "
							/>
							<NewsSmallBox
								author="Jack Doe"
								date="12 October 2024"
								title="Medication Prices Hit All Time High Thanks To Donald Trump"
								img_url="4.jpeg"
								page_url=" "
							/>
						</div>
					</div>

					<div className="flex w-full mt-24 mb-12">
						<div className="w-1/3 pr-8" style={{ alignContent: 'center' }}>
							<hr style={{ borderTop: '2px solid var(--mainblue)' }} />
						</div>
						<div
							className="w-1/3 text-center"
							style={{ alignContent: 'center' }}
						>
							<h1 className="text-2xl " style={{ color: 'var(--mainblue)' }}>
								<b>More Articles</b>
							</h1>
						</div>
						<div className="w-1/3 pl-8" style={{ alignContent: 'center' }}>
							<hr style={{ borderTop: '2px solid var(--mainblue)' }} />
						</div>
					</div>
					<div
						className="otherNews grid grid-cols-1 xl:grid-cols-2 gap-8"
						style={{ color: 'white' }}
					>
						<NewsSmallBox
							author="Jim Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="5.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Jeff Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="6.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Jerry Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="7.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Juan Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="8.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Joan Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="9.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Jared LeDoe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="10.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Jheine Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="11.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="June Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="12.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Jana Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="13.jpeg"
							page_url=" "
						/>

						<NewsSmallBox
							author="Johannah Doe"
							date="12 October 2024"
							title="New Jellyfish Species Discovered In The Mariana Trench"
							img_url="14.jpeg"
							page_url=" "
						/>
					</div>
					<div className="loadMoreDiv mt-16 mb-8 text-center text-white w-full">
						<button
							type="button"
							className="text-md font-bold bg-[var(--mainblue)] pt-2 pb-2 pl-4 pr-4 cursor-pointer"
							style={{ borderRadius: '.5rem' }}
						>
							Load More
						</button>
					</div>
				</main>
			</div>
		</div>
	);
}
