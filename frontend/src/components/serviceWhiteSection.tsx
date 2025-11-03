import Image from 'next/image';
import SmallMainPoint from '@/components/smallMainPoint';
import { imagesURL } from '../../public/support/js/webState';

export default function ServiceWhiteSection({
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
			className="bg-white shadow-sm shadow-(color:--lightgreyblue) rounded-2xl p-8 border-l-4 border-[var(--mainblue)] mt-10 mb-10 grid grid-cols-2 gap-x-8 w-full lg:w-4/5 m-auto"
			data-aos={aos}
			data-aos-delay={aos_delay}
		>
			<div
				className="image relative h-full w-full col-span-2 lg:col-span-1"
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
				<SmallMainPoint
					pointText={heading}
					pointClassName="whiteLeftPoint"
					center={true}
				/>
				{html}
			</div>
		</section>
	);
}
