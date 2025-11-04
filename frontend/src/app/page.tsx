'use client';

import Carousel from '@/components/homeCarousel';
import '../../public/support/css/homepage.css';
import ModernHeading from '@/components/modernHeading';
import TeamPerson from '@/components/teamPerson';
import { apiURL, imagesURL } from '../../public/support/js/webState.js';
import { motion } from 'framer-motion';
import Image from 'next/image';

async function fetchCarouselImages() {
	const data = await fetch(`${apiURL}misc-images/carousels`, { method: 'GET' });
	const dataJSON = await data.json();
	return dataJSON;
}

async function fetchAllBoard() {
	const data = await fetch(`${apiURL}team`, { method: 'GET' });
	const dataJSON = await data.json();
	return dataJSON;
}

const { data: imagesData } = await fetchCarouselImages();
const { data: allData } = await fetchAllBoard();

export default function Home() {
	return (
		<>
			{/* --- HERO CAROUSEL --- */}
			<Carousel imagesData={imagesData} />

			{/* --- PAGE CONTENT --- */}
			<div className="pageContent w-full bg-[#f8fbff] relative">
				<main className="content-wrap w-full px-8 md:px-16 lg:px-32 xl:px-48 space-y-52 py-32">

					{/* WHO WE ARE */}
					<section className="relative grid md:grid-cols-2 gap-16 items-center overflow-hidden px-16">
						<motion.div
							className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,120,255,0.08),transparent_70%)]"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
						/>
						<div>
							<ModernHeading title="Who We Are" />
							<motion.p
								className="mt-8 text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7 }}
							>
								PT ABB Insurance Brokers is a licensed and OJK-regulated firm that provides
								strategic, transparent, and client-focused insurance solutions. Our mission
								is to turn complexity into clarity — helping organizations manage risk with
								confidence and precision. With deep expertise and a global reach, we design
								programs that protect what truly matters: people, assets, and ambitions.
							</motion.p>
						</div>

						<motion.div
							className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<Image
								src={`${imagesURL}whoarewe.jpeg`}
								alt="ABB Team"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#00163a]/70 via-transparent to-transparent" />
						</motion.div>
					</section>

					{/* WHY CHOOSE US */}
					<section className="relative py-24 px-10 md:px-16 rounded-3xl bg-gradient-to-br from-[#e9f3ff] to-[#f8fbff] shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)]">
						<ModernHeading title="Why Choose Us" accent centered />
						<div className="mt-12 grid md:grid-cols-3 gap-10">
							{[
								{
									icon: '🧠',
									title: 'Strategic Expertise',
									desc: 'Our specialists analyze your unique risks and tailor insurance strategies that align with your business objectives.'
								},
								{
									icon: '🤝',
									title: 'Global Network',
									desc: 'We leverage relationships with both local and international insurers to secure optimal coverage and competitive terms.'
								},
								{
									icon: '⚡',
									title: 'Agile Service',
									desc: 'Our proactive, client-first culture ensures swift responses, transparent communication, and seamless claims support.'
								}
							].map((item, i) => (
								<motion.div
									key={i}
									className="p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: i * 0.15 }}
								>
									<div className="text-4xl mb-4">{item.icon}</div>
									<h3 className="text-xl font-semibold text-[var(--darkoceanblue)] mb-2">{item.title}</h3>
									<p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
								</motion.div>
							))}
						</div>
					</section>

					{/* VISION / MISSION */}
					<section className="relative px-16 grid md:grid-cols-2 gap-20 items-center">
						<motion.div
							className="relative p-10 bg-white/60 backdrop-blur-lg rounded-3xl shadow-md"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<ModernHeading title="Our Vision" />
							<p className="mt-6 text-gray-700 text-lg leading-relaxed">
								To be Indonesia’s most trusted and forward-thinking insurance broker —
								empowering clients with clarity, protection, and measurable value.
							</p>
						</motion.div>

						<motion.div
							className="relative p-10 bg-gradient-to-br from-[#002e74] to-[#0041b2] text-white rounded-3xl shadow-lg"
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<ModernHeading title="Our Mission" light />
							<p className="mt-6 text-lg leading-relaxed opacity-90">
								To protect what matters most through transparent, practical, and scalable
								insurance and risk management solutions that adapt to your evolving needs.
							</p>
						</motion.div>
					</section>

					{/* TEAM */}
					<section className="relative py-20 px-16">
						<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,80,255,0.05),transparent_70%)]" />
						<ModernHeading title="Meet Our Experts" centered />
						<TeamPerson groupData={allData} />
					</section>

					{/* SUPPORTED BY */}
					<section className="relative py-20 px-8 rounded-3xl overflow-hidden bg-gradient-to-r from-[#f7faff] via-[#eef4ff] to-[#f7faff] shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)]">
						<ModernHeading title="Supported By" centered />
						<motion.p
							className="mt-6 text-gray-700 text-lg text-center leading-relaxed max-w-3xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							We work with leading insurers and service providers to ensure every client
							has access to reliable capacity, expertise, and responsive support when it
							matters most.
						</motion.p>
						<div className="mt-10 flex gap-14 justify-center flex-wrap opacity-90">
							<Image src={`${imagesURL}partners/ojk.png`} alt="Partner 1" width={140} height={60} />
							<Image src={`${imagesURL}partners/ojk.png`} alt="Partner 1" width={140} height={60} />
							<Image src={`${imagesURL}partners/ojk.png`} alt="Partner 1" width={140} height={60} />
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
