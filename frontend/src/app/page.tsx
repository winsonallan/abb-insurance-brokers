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
						PT ABB Insurance Brokers is one of Indonesia’s leading licensed
						insurance brokerage firms, regulated by the Financial Services
						Authority (OJK). Headquartered in Jakarta, we operate with a team of
						highly experienced professionals who specialize in designing and
						managing insurance and risk management programs through a trusted
						national and international network. Our approach blends expertise,
						innovation, and personalized service — ensuring every solution we
						deliver is strategic, compliant, and tailored to your business
						goals. From corporate enterprises to specialized industries, we
						bring clarity, protection, and measurable value to every
						partnership.
					</p>
					<MainPoint
						pointText="Why Choose Us"
						pointClassName="whiteLeftPoint"
					/>
					<p className="mb-12 text-center md:text-left">
						At ABB, we believe effective insurance management starts with
						understanding. We act as an extension of your business — not just
						your broker, but your partner in managing risk, optimizing coverage,
						and ensuring claims are handled swiftly and fairly. What sets us
						apart is our commitment to responsiveness, reliability, and results.
						We respond to your needs promptly, negotiate the best possible terms
						with both local and international insurers, and deliver programs
						that are practical, cost-effective, and built around your
						priorities. With ABB, you gain more than just insurance — you gain
						peace of mind, knowing your protection is guided by professionals
						who truly care about your success.
					</p>
					<MainPoint pointText="Our Vision" pointClassName="whiteLeftPoint" />
					<p className="mb-12 text-center md:text-left">
						Our vision is to become Indonesia’s most trusted and
						forward-thinking insurance brokerage, known for delivering clarity,
						confidence, and value in every partnership. We strive to elevate the
						standards of insurance services by combining deep industry
						expertise, innovative thinking, and unwavering integrity. Through a
						seamless balance of human insight and technology, we aim to empower
						individuals and organizations to navigate risk intelligently —
						transforming insurance from a necessary cost into a strategic
						advantage that supports long-term growth and security.
					</p>
					<MainPoint pointText="Our Mission" pointClassName="whiteLeftPoint" />
					<p className="mb-12 text-center md:text-left">
						Our mission is to protect what matters most — our clients’ people,
						assets, and ambitions — through comprehensive insurance and risk
						management solutions that are tailored, transparent, and effective.
						We are committed to guiding every client with professionalism,
						responsiveness, and care, ensuring that each recommendation is built
						on a true understanding of their business. By continuously improving
						our expertise, embracing innovation, and fostering lasting
						relationships, we seek to provide peace of mind and measurable value
						that extends far beyond the policy itself.
					</p>
					<MainPoint
						pointText="Meet Our Experts"
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
