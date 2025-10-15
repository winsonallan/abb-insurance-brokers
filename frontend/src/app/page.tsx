'use client';

import Carousel from '@/components/homeCarousel';
import '../../public/support/css/homepage.css';
import Image from 'next/image';

const apiURL = 'http://localhost:5000/api/v1/';

async function fetchCarouselImages() {
	const data = await fetch(`${apiURL}misc-images/carousels`, {
		method: 'GET',
	});
	const dataJSON = await data.json();

	return dataJSON;
}

const { data: imagesData } = await fetchCarouselImages();
export default async function Home() {
	return (
		<>
			<Carousel imagesData={imagesData} />
			<div className="pageContent">
				<div className="mainPoints">
					<div className="leftPoint">
						<h1 className="text-4xl">
							<b>Our Services</b>
						</h1>
					</div>
				</div>
				<div className="pointContent flex">
					<div
						className="pointLeft flex flex-col"
						style={{ justifyContent: 'center' }}
					>
						<div className="pointText left">
							<div className="pointHeading">
								<h1 className="text-2xl">
									<b>Claims Management</b>
								</h1>
							</div>
							<div className="pointDetails">
								In rhoncus leo in purus iaculis pulvinar. Curabitur ac elementum
								nisi. In scelerisque risus ut felis dapibus, sit amet pretium
								diam convallis. Aenean sagittis lacus sit amet vestibulum
								vehicula. Mauris rhoncus nulla in erat dignissim, quis
								sollicitudin libero ornare. Nam cursus libero arcu, accumsan
								cursus mi aliquet sed. Phasellus dignissim purus at justo
								fermentum mattis.
							</div>
							<div style={{ marginTop: '2rem' }}>
								<a href="/claims-management">Learn More &gt;&gt;</a>
							</div>
						</div>
					</div>
					<div className="pointRight">
						<div className="pointImage">
							<Image
								src={`/support/images/our-services/claims-management.jpeg`}
								alt="Carousel background"
								fill
								style={{
									objectFit: 'cover',
									outline: '1px solid #fff',
									borderRadius: '.7rem',
								}}
							/>
						</div>
					</div>
				</div>

				<div className="pointContent flex">
					<div className="pointRight">
						<div className="pointImage">
							<Image
								src={`/support/images/our-services/risk-management.jpeg`}
								alt="Carousel background"
								fill
								style={{
									objectFit: 'cover',
									outline: '1px solid #fff',
									borderRadius: '.7rem',
								}}
							/>
						</div>
					</div>
					<div
						className="pointLeft flex flex-col"
						style={{ justifyContent: 'center' }}
					>
						<div className="pointText right">
							<div className="pointHeading">
								<h1 className="text-2xl">
									<b>Risk Management</b>
								</h1>
							</div>
							<div className="pointDetails">
								Sed finibus sapien erat, vitae porttitor metus consequat in. Ut
								ipsum velit, interdum vel diam sit amet, elementum ullamcorper
								justo. Ut pharetra, risus nec mattis auctor, libero tellus
								placerat lacus, id sollicitudin eros nisl sit amet erat.
								Vestibulum hendrerit mauris id convallis fermentum. Mauris
								consectetur sed nisl et volutpat. Vestibulum consequat leo sit
								amet tortor ornare cursus.
							</div>
							<div style={{ marginTop: '2rem' }}>
								<a href="/risk-management">Learn More &gt;&gt;</a>
							</div>
						</div>
					</div>
				</div>

				<div className="pointContent flex">
					<div
						className="pointLeft flex flex-col"
						style={{ justifyContent: 'center' }}
					>
						<div className="pointText left">
							<div className="pointHeading">
								<h1 className="text-2xl">
									<b>Insurance Management</b>
								</h1>
							</div>
							<div className="pointDetails">
								Sed ac arcu consectetur, ullamcorper leo vitae, pretium nulla.
								Vestibulum et euismod magna, a accumsan ligula. Nunc pretium mi
								velit, quis laoreet lacus mattis quis. Duis malesuada dictum
								ornare.
							</div>
							<div style={{ marginTop: '2rem' }}>
								<a href="insurance-management">Learn More &gt;&gt;</a>
							</div>
						</div>
					</div>
					<div className="pointRight">
						<div className="pointImage">
							<Image
								src={`/support/images/our-services/insurance-management.jpeg`}
								alt="Insurance Management"
								fill
								style={{
									objectFit: 'cover',
									outline: '1px solid #fff',
									borderRadius: '.7rem',
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
