import Image from 'next/image';

interface newsSmallBoxProps {
	author: string;
	date: string;
	title: string;
	img_url: string;
	page_url: string;
}

export default function NewsSmallBox({
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
				style={{ textDecoration: 'none', color: 'white' }}
				className="hidden lg:block"
			>
				<div
					className="flex bg-[var(--darkblue)]"
					style={{
						borderRadius: '.5rem',
					}}
				>
					<div className="imageDiv full h-[230px] relative w-1/2">
						<Image
							src={`/support/images/news/${img_url}`}
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
					<div className="p-4 font-bold w-1/2">
						<span className="text-sm">
							{author}&nbsp;|&nbsp;{date}
						</span>
						<br />
						<br />
						<span className=" text-elipsis" style={{ whiteSpace: 'wrap' }}>
							{title}
						</span>
					</div>
				</div>
			</a>

			<a
				href={page_url}
				style={{ textDecoration: 'none', color: 'white' }}
				className="block lg:hidden"
			>
				<div
					className="flex flex-col bg-[var(--darkblue)]"
					style={{
						borderRadius: '.6rem',
					}}
				>
					<div className="imageDiv w-full h-[230px] relative">
						<Image
							src={`/support/images/news/${img_url}`}
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
					<div className="p-4 font-bold full">
						<span className="text-sm">
							{author}&nbsp;|&nbsp;{date}
						</span>
						<br />
						<br />
						<span className=" text-elipsis" style={{ whiteSpace: 'wrap' }}>
							{title}
						</span>
					</div>
				</div>
			</a>
		</>
	);
}
