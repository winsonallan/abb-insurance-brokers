import Image from 'next/image';
import SmallMainPoint from '@/components/smallMainPoint';
import { imagesURL } from '../../public/support/js/webState';

export default function ServiceBlueSection({
	img_path,
	heading,
	html,
	img_alt,
	aos,
	aos_delay,
}: {
	img_path: string;
	heading: string;
	html: React.ReactNode;
	img_alt: string;
	aos: string;
	aos_delay: string;
}) {
	return (
		<section
			className="shadow-sm shadow-(color:--lightgreyblue) rounded-2xl p-8 border-r-4 border-(--lightgreyblue) mt-10 mb-10 grid grid-cols-2 gap-x-8 w-full lg:w-4/5 m-auto"
			data-aos={aos}
			data-aos-delay={aos_delay}
			style={{ background: 'var(--darkerblue)' }}
		>
			<div
				className="image relative h-full w-full col-span-2 lg:hidden"
				style={{
					alignContent: 'center',
					alignItems: 'center',
					borderRadius: '.5rem',
				}}
			>
				<Image
					src={`${imagesURL}our-services/insurance-management/${img_path}`}
					width={500}
					height={500}
					alt={img_alt}
					style={{
						objectFit: 'cover',
						borderRadius: '.5rem',
					}}
					className="m-auto lg:ml-0 transition-transform duration-300 hover:scale-[1.02]"
				/>
			</div>
			<div className="text w-full h-full col-span-2 lg:col-span-1 text-center lg:text-left">
				<div className="flex flex-col sm:justify-center">
					<div className="w-full text-center lg:text-left mb-0 pb-2">
						<h1
							className="text-2xl font-bold mt-4"
							style={{ color: 'var(--lightgreyblue)' }}
						>
							{heading}
						</h1>
					</div>
				</div>
				{html}
			</div>
			<div
				className="image hidden h-full w-full col-span-2 lg:col-span-1 relative lg:block"
				style={{
					alignContent: 'center',
					alignItems: 'center',
					borderRadius: '.5rem',
				}}
			>
				<Image
					src={`${imagesURL}our-services/insurance-management/${img_path}`}
					width={500}
					height={500}
					alt={img_alt}
					style={{
						objectFit: 'cover',
						borderRadius: '.5rem',
					}}
					className="m-auto lg:mr-0 transition-transform duration-300 hover:scale-[1.02]"
				/>
			</div>
		</section>
	);
}
