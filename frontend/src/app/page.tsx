'use client';

import Image from 'next/image';

import Carousel from '@/components/homeCarousel';
import '../../public/support/css/homepage.css';
import MainPoint from '@/components/mainPoint';
import TeamPerson from '@/components/teamPerson';
import { apiURL } from '../../public/support/js/webState.js';

async function fetchCarouselImages() {
	const data = await fetch(`${apiURL}misc-images/carousels`, {
		method: 'GET',
	});
	const dataJSON = await data.json();

	return dataJSON;
}

async function fetchAllBoard() {
	const data = await fetch(`${apiURL}team`, {
		method: 'GET',
	});
	const dataJSON = await data.json();
	return dataJSON;
}

const { data: imagesData } = await fetchCarouselImages();
const { data: allData } = await fetchAllBoard();

export default function Home() {
	return (
		<>
			<Carousel imagesData={imagesData} />

			<div className="pageContent pb-0">
				<main className="pb-6 pl-4 pr-4 md:pl-16 md:pr-16 2xl:pl-48 2xl:pr-48">
					<MainPoint pointText="Who We Are" pointClassName="whiteLeftPoint" />
					<p className="mb-12 text-center md:text-left">
						Aliquam nec nunc mauris. Sed nec maximus nunc, a condimentum massa.
						Vestibulum ornare metus ac tincidunt cursus. Cras dui enim,
						venenatis eget augue at, finibus aliquam ex. Duis a facilisis leo.
						Nullam id porta dui. In tincidunt feugiat nibh ut imperdiet. Nulla
						mauris dolor, convallis in ex eget, porta iaculis sem. Mauris id ex
						nec purus vulputate suscipit eget eget risus. Nam convallis id justo
						id sagittis. Vivamus condimentum placerat leo ac accumsan.
					</p>
					<MainPoint
						pointText="Why Choose Us"
						pointClassName="whiteLeftPoint"
					/>
					<p className="mb-12 text-center md:text-left">
						Sed sed consequat arcu. Aenean molestie augue lorem, sit amet porta
						nisl efficitur eget. Duis vitae massa urna. Nam cursus at ligula
						hendrerit faucibus. Donec laoreet quis enim vitae laoreet. Proin ac
						gravida lacus. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Nunc luctus nisi nibh,
						eget auctor purus mattis imperdiet. Nulla condimentum imperdiet
						blandit. Duis volutpat auctor ex et dictum. Suspendisse potenti. Sed
						eget urna nisl. Phasellus non metus aliquam, porta lectus quis,
						vestibulum augue. Suspendisse consectetur tincidunt sem malesuada
						elementum. Quisque sollicitudin lectus molestie nunc accumsan, in
						porttitor elit rutrum. Vivamus et sagittis nunc.
					</p>
					<MainPoint pointText="Our Vision" pointClassName="whiteLeftPoint" />
					<p className="mb-12 text-center md:text-left">
						Sed sed consequat arcu. Aenean molestie augue lorem, sit amet porta
						nisl efficitur eget. Duis vitae massa urna. Nam cursus at ligula
						hendrerit faucibus. Donec laoreet quis enim vitae laoreet. Proin ac
						gravida lacus. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Nunc luctus nisi nibh,
						eget auctor purus mattis imperdiet. Nulla condimentum imperdiet
						blandit. Duis volutpat auctor ex et dictum. Suspendisse potenti. Sed
						eget urna nisl. Phasellus non metus aliquam, porta lectus quis,
						vestibulum augue. Suspendisse consectetur tincidunt sem malesuada
						elementum. Quisque sollicitudin lectus molestie nunc accumsan, in
						porttitor elit rutrum. Vivamus et sagittis nunc.
					</p>
					<MainPoint pointText="Our Mission" pointClassName="whiteLeftPoint" />
					<p className="mb-12 text-center md:text-left">
						Sed sed consequat arcu. Aenean molestie augue lorem, sit amet porta
						nisl efficitur eget. Duis vitae massa urna. Nam cursus at ligula
						hendrerit faucibus. Donec laoreet quis enim vitae laoreet. Proin ac
						gravida lacus. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Nunc luctus nisi nibh,
						eget auctor purus mattis imperdiet. Nulla condimentum imperdiet
						blandit. Duis volutpat auctor ex et dictum. Suspendisse potenti. Sed
						eget urna nisl. Phasellus non metus aliquam, porta lectus quis,
						vestibulum augue. Suspendisse consectetur tincidunt sem malesuada
						elementum. Quisque sollicitudin lectus molestie nunc accumsan, in
						porttitor elit rutrum. Vivamus et sagittis nunc.
					</p>
					<MainPoint
						pointText="Meet Our Team"
						pointClassName="whiteLeftPoint"
					/>
					<TeamPerson groupData={allData} />
					<MainPoint pointText="Supported By" pointClassName="whiteLeftPoint" />
					<p className="mb-12 text-center md:text-left">
						Sed sed consequat arcu. Aenean molestie augue lorem, sit amet porta
						nisl efficitur eget. Duis vitae massa urna. Nam cursus at ligula
						hendrerit faucibus. Donec laoreet quis enim vitae laoreet. Proin ac
						gravida lacus. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Nunc luctus nisi nibh,
						eget auctor purus mattis imperdiet. Nulla condimentum imperdiet
						blandit. Duis volutpat auctor ex et dictum. Suspendisse potenti. Sed
						eget urna nisl. Phasellus non metus aliquam, porta lectus quis,
						vestibulum augue. Suspendisse consectetur tincidunt sem malesuada
						elementum. Quisque sollicitudin lectus molestie nunc accumsan, in
						porttitor elit rutrum. Vivamus et sagittis nunc.
					</p>
				</main>
			</div>
		</>
	);
}
