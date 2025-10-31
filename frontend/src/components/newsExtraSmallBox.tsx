import Image from 'next/image';
import { imagesURL } from '../../public/support/js/webState';

interface newsSmallBoxProps {
	author: string;
	date: string;
	title: string;
	img_url: string;
	page_url: string;
}

export default function NewsExtraSmallBox({
	author,
	date,
	title,
	img_url,
	page_url,
}: newsSmallBoxProps) {
	return (
		<>
			<a
				href={page_url}
				title={title}
				style={{ textDecoration: 'none', color: 'white' }}
				className="hidden lg:block"
			>
				<div
					className="flex"
					style={{
						borderRadius: '.5rem',
						background: 'var(--darkflippedgradient)',
					}}
				>
					<div className="imageDiv full h-[230px] relative w-1/2">
						<Image
							src={`${imagesURL}news/${img_url}`}
							alt={title}
							fill
							style={{
								objectFit: 'cover',
								objectPosition: 'top',
								borderTopLeftRadius: '.5rem',
								borderBottomLeftRadius: '.5rem',
							}}
						/>
					</div>
					<div className="p-4 font-bold w-1/2 text-md">
						<span className="text-sm">
							{author}&nbsp;|&nbsp;{date}
						</span>
						<br />
						<br />
						<span className="w-full line-clamp-3">{title}</span>
					</div>
				</div>
			</a>

			<a
				href={page_url}
				title={title}
				style={{ textDecoration: 'none', color: 'white' }}
				className="block lg:hidden"
			>
				<div
					className="flex flex-col"
					style={{
						borderRadius: '.6rem',
						background: 'var(--darkflippedgradient)',
					}}
				>
					<div className="imageDiv w-full h-[230px] relative">
						<Image
							src={`${imagesURL}news/${img_url}`}
							alt={title}
							fill
							style={{
								objectFit: 'cover',
								objectPosition: 'top',
								borderTopLeftRadius: '.5rem',
								borderTopRightRadius: '.5rem',
							}}
						/>
					</div>
					<div className="p-4 font-bold full text-md">
						<span className="text-sm">
							{author}&nbsp;|&nbsp;{date}
						</span>
						<br />
						<br />
						<span className="truncate">{title}</span>
					</div>
				</div>
			</a>
		</>
	);
}
