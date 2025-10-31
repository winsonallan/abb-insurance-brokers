/** biome-ignore-all lint/suspicious/noExplicitAny: False Positive */

'use client';
import type { Dispatch, SetStateAction } from 'react';

export default function OverlayCarousel({
	state,
	stateFunction,
}: {
	state: boolean;
	stateFunction: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div
			className={`${state ? 'absolute' : 'hidden'} bg-white w-full lg:w-1/2 rounded-md border border-2 m-auto px-4 py-2 font-bold overflow-y-auto`}
			style={{
				borderColor: 'var(--lightskyblue)',
				top: '40px',
				right: '1rem',
				color: 'var(--foreground)',
				maxHeight: '600px',
			}}
		>
			<div className="p-4">
				<form action="" id="addCarouselForm">
					<div className="cancelButton flex justify-end">
						<button
							style={{
								color: 'darkred',
							}}
							className="w-full text-right font-bold cursor-pointer"
							type="button"
							onClick={() => {
								stateFunction(false);
							}}
						>
							<span
								style={{ border: '2px solid darkred', borderRadius: '5px' }}
								className="px-2 py-1"
							>
								Cancel&nbsp;<i className="fa-solid fa-x"></i>
							</span>
						</button>
					</div>
					{/* Image */}
					<div className="flex" style={{ alignItems: 'center' }}>
						Image&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<label
							htmlFor="carouselImage ml-4"
							className="cursor-pointer"
							style={{ color: 'var(--linkblue)' }}
						>
							Click here to upload... <i className="fa-solid fa-upload"></i>
						</label>
						<input
							type="file"
							name=""
							id="carouselImage"
							className="p-1 ml-5 mb-2 hidden"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
							}}
						/>
					</div>
					{/* Heading (EN) */}
					<div className="flex mt-4 mb-2" style={{ alignItems: 'center' }}>
						Heading (EN)
						<input
							type="text"
							name=""
							id=""
							className="p-1 ml-5 mb-2 w-2/3"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
							}}
						/>
					</div>
					{/* Heading (ID) */}
					<div className="flex mt-4 mb-2" style={{ alignItems: 'center' }}>
						Heading (ID)
						<input
							type="text"
							name=""
							id=""
							className="p-1 ml-5 mb-2 w-2/3"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
							}}
						/>
					</div>
					{/* Content (EN) */}
					<div className="flex mt-4 mb-2">
						Content (EN)
						<textarea
							name=""
							id=""
							className="p-3 ml-5 mb-2 w-2/3 h-[240px]"
							maxLength={550}
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
							}}
							placeholder={'Maximum 550 Characters.'}
						/>
					</div>
					{/* Content (ID) */}
					<div className="flex mt-4 mb-8">
						Content (ID)
						<textarea
							name=""
							id=""
							className="p-3 ml-5 mb-2 w-2/3 h-[240px]"
							maxLength={550}
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
							}}
							placeholder={'Maximum 550 Characters'}
						/>
					</div>
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer m-auto"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Add Carousel
					</button>
				</form>
			</div>
		</div>
	);
}
