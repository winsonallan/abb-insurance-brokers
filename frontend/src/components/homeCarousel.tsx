'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../public/support/css/components/carousel.css';

interface CarouselImage {
	id: number;
	image_path: string;
	caption: string;
	description: string;
	content_type: string;
	link_url: string;
	display_order: number;
}

interface CarouselProps {
	imagesData: CarouselImage[];
}

export default function Carousel({ imagesData }: CarouselProps) {
	const carouselLen = imagesData.length;

	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % carouselLen);
		}, 7000);

		return () => clearInterval(interval);
	}, [carouselLen]);

	return (
		<div className="relative h-230 w-full">
			<div className="w-full absolute h-230 z-1">
				<div
					className="floatingContainer left flex flex-col p-8"
					style={{ justifyContent: 'space-between' }}
				>
					<div className="containerContent">
						<div className="containerHeader" style={{ marginBottom: '1.5rem' }}>
							{imagesData.map((src, i) => (
								<h1
									key={`contentHeading__${i}`}
									className={`carouselHeading ${i === currentIndex ? 'active' : ''} text-4xl containerHeader__text`}
									id={`carouselHeading__${i}`}
									style={{ fontWeight: 500, color: '#232ade' }}
								>
									{src.caption}
								</h1>
							))}
						</div>

						<div className="containerContent">
							{imagesData.map((src, i) => (
								<p
									key={`contentText__${i}`}
									className={`carouselText ${i === currentIndex ? 'active' : ''}`}
									id={`carouselText__${i}`}
								>
									{src.description}
								</p>
							))}
						</div>
					</div>
					<div
						className="flex carouselDots"
						style={{ justifyContent: 'center', marginBottom: '1rem' }}
					>
						{imagesData.map((_, i) => (
							<div
								key={i}
								className={`carouselDot ${i === currentIndex ? 'active' : ''}`}
							></div>
						))}
					</div>
				</div>
			</div>

			<div className="w-full absolute h-230 z-0">
				{imagesData.map((src, i) => (
					<Image
						key={i}
						className={`carouselImage ${i === currentIndex ? 'active' : ''}`}
						id={`carouselImage__${i}`}
						src={`/support/images/carousel/${src.image_path}`}
						alt="Carousel background"
						fill
						style={{
							objectFit: 'cover',
							objectPosition: 'top',
						}}
					/>
				))}
			</div>
		</div>
	);
}
