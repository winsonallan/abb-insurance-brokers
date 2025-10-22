'use client';
import Image from 'next/image';
import { useState } from 'react';

interface CarouselImages {
	imagesData: {
		cover: string;
		others: string[];
	};
}

export default function NewsCarousel({ imagesData }: CarouselImages) {
	const finalImages = [imagesData.cover, ...imagesData.others];
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className="flex flex-col gap-4">
			<div className="relative w-[1000px] h-[550px] flex justify-center overflow-hidden rounded-lg m-auto">
				<div
					key={finalImages[currentIndex]}
					className="fade-wrapper absolute inset-0"
				>
					<Image
						src={`/support/images/news/${finalImages[currentIndex]}`}
						alt="Main News Image"
						width={1000}
						height={550}
						className="object-cover object-top rounded-lg"
					/>
				</div>
			</div>

			{/* Thumbnail Carousel */}
			<div className="news-carousel flex gap-3 overflow-x-auto p-2 m-auto">
				{finalImages.map((src, index) => (
					<button
						key={src}
						onClick={() => setCurrentIndex(index)}
						type="button"
						className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all w-[200px] h-[150px] flex-shrink-0 focus:outline-none ${
							index === currentIndex
								? 'border-blue-500 scale-105'
								: 'border-transparent hover:border-blue-400'
						}`}
					>
						<Image
							src={`/support/images/news/${src}`}
							alt={`Thumbnail ${index + 1}`}
							fill
							className="object-cover object-top"
						/>
					</button>
				))}
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
