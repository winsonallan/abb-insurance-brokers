'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { imagesURL } from '../../public/support/js/webState';

interface CarouselImages {
	imagesData: {
		cover: string;
		others: string[];
	};
}

export default function NewsCarousel({ imagesData }: CarouselImages) {
	const finalImages = [imagesData.cover, ...imagesData.others];
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className="flex flex-col gap-4">
			<div className="relative w-full lg:w-5/8 h-[400px] flex justify-center overflow-hidden rounded-lg m-auto px-2">
				<div
					key={finalImages[currentIndex]}
					className="fade-wrapper aboslute inset-0"
					style={{ alignContent: 'center' }}
				>
					<Image
						src={`${imagesURL}news/${finalImages[currentIndex]}`}
						alt="Main News Image"
						width={800}
						height={600}
						className="object-contain rounded-lg"
						style={{ width: 'auto', height: 'auto' }}
					/>
				</div>
			</div>

			{/* Thumbnail Carousel */}
			{/* Outer wrapper handles centering if few images */}
			<div
				className={`w-full flex ${
					finalImages.length >= 3 ? 'justify-start' : 'justify-center'
				}`}
			>
				{/* Scrollable strip */}
				<div
					ref={carouselRef}
					className="news-carousel flex gap-3 overflow-x-auto py-2 px-0 w-full max-w-full scroll-smooth"
				>
					{/* Left spacer so first thumbnail can fully show */}
					<div className="flex-shrink-0 w-0.3" />

					{finalImages.map((src, index) => (
						<button
							key={src}
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
								if (!carouselRef.current) return;

								setCurrentIndex(index);

								const carousel = carouselRef.current;
								const button = e.currentTarget;

								if (carousel && button) {
									const carouselRect = carousel.getBoundingClientRect();
									const buttonRect = button.getBoundingClientRect();

									// Distance needed to center the button
									const scrollLeft =
										carousel.scrollLeft +
										(buttonRect.left - carouselRect.left) -
										carouselRect.width / 2 +
										buttonRect.width / 2;

									// Clamp to avoid overscrolling
									const maxScrollLeft =
										carousel.scrollWidth - carousel.clientWidth;
									const targetScroll = Math.max(
										0,
										Math.min(maxScrollLeft, scrollLeft),
									);

									carousel.scrollTo({
										left: targetScroll,
										behavior: 'smooth',
									});
								}
							}}
							type="button"
							className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all w-[200px] h-[150px] flex-shrink-0 focus:outline-none ${
								index === currentIndex
									? 'border-blue-500 scale-105'
									: 'border-transparent hover:border-blue-400'
							}`}
						>
							<Image
								src={`${imagesURL}news/${src}`}
								alt={`Thumbnail ${index + 1}`}
								fill
								className="object-cover object-top"
								sizes="{max-width: 207px} 100vw"
							/>
						</button>
					))}

					{/* Right spacer */}
					<div className="flex-shrink-0 w-0.3" />
				</div>
			</div>

			<style jsx>{`
				.fade-wrapper {
					opacity: 0;
					animation: fadeIn 1s ease-in-out forwards;
				}

				@keyframes fadeIn {
					from {
						opacity: 0.5;
						transform: scale(1.02);
					}
					to {
						opacity: 1;
						transform: scale(1);
					}
				}
			`}</style>
		</div>
	);
}
