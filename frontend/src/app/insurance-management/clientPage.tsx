'use client';
import AOS from 'aos';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';
import ServiceBlueSection from '@/components/serviceBlueSection';
import ServiceWhiteSection from '@/components/serviceWhiteSection';
import SmallMainPoint from '@/components/smallMainPoint';
import { imagesURL } from '../../../public/support/js/webState';

const InsuranceMindMap = dynamic(() => import('./InsuranceMindMap'), {
	ssr: false,
});

export default function InsuranceManagementClient() {
	useEffect(() => {
		AOS.init({ duration: 800, once: false, offset: 80 });
	});

	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<h1
						className="text-3xl mb-12"
						style={{ color: 'var(--mainblue)' }}
						data-aos="fade-right"
					>
						<b>Insurance Management</b>
					</h1>

					{/* === Our Commitment === */}
					<ServiceWhiteSection
						heading="Our Commitment"
						img_path="commitment.jpeg"
						img_alt="Our Commitment"
						aos="fade-right"
						aos_delay="100"
						html={
							<>
								<p className="text-gray-700 leading-relaxed mt-4">
									We're committed to provide the best insurance services
									possible that are intended to protect your most valuable
									assets. We also believe that insurance should bring peace of
									mind instead of uncertainty and needless expense. In order to
									do that, we make sure that you understand completely on what
									you're covered for and why by conducting open consultation
									with each client.
								</p>
								<p className="text-gray-700 leading-relaxed mt-4">
									We're also committed to thoroughly examine your unique
									situation, whether it be personal or business related, so that
									we can find the coverage that best suits your needs. Providing
									you with the best insurance option for your money is the goal
									behind every suggestion we make.
								</p>
								<p className="text-gray-700 leading-relaxed mt-4">
									Finally, we will never suggest unnecessary policies to you. We
									are not here to oversell; we are here to assist you in
									safeguarding your interests. With each client we serve, this
									philosophy establishes the basis of trust and defines our
									work.
								</p>
							</>
						}
					/>

					{/* === Our Approach === */}
					<section
						className="bg-[var(--lightbluebg,#f5f9ff)] rounded-2xl p-8 mt-10 mb-10 w-full lg:w-4/5 m-auto shadow-sm shadow-(color:--lightgreyblue)"
						data-aos="fade-left"
						data-aos-delay="200"
					>
						<SmallMainPoint
							pointText="Our Approach"
							pointClassName="whiteLeftPoint"
							center={true}
						/>
						<p className="text-gray-700 leading-relaxed mt-4 text-center">
							We recognize that each and every customer, whether they are big
							corporations or individual policyholders, is different. This
							results in us adopting a very individualized strategy. This means
							that we thoroughly examine your goals, risk profile, and
							circumstances before arriving at a solution that fits your needs.
						</p>
						<p className="text-gray-700 leading-relaxed mt-4 text-center">
							In making sure that your coverage is effective and efficient, our
							experts combine their technical expertise with practical
							experience and in-depth market insights. We ensure that you
							receive complete protection without needless complexity by
							combining our access to various insurance programs with
							individualized advice.
						</p>
						<div
							className="image h-full w-full relative"
							style={{
								alignContent: 'center',
								alignItems: 'center',
								borderRadius: '.5rem',
							}}
						>
							<Image
								src={`${imagesURL}our-services/insurance-management/approach.jpeg`}
								width={500}
								height={500}
								alt="Our Approach"
								style={{
									objectFit: 'cover',
									borderRadius: '.5rem',
								}}
								className="m-auto mt-8 transition-transform duration-300 hover:scale-[1.02]"
							/>
						</div>
					</section>

					{/* === Your Advantage === */}
					<ServiceBlueSection
						heading="Your Advantage"
						img_path="advantage.jpeg"
						img_alt="Your Advantage"
						aos="zoom-in"
						aos_delay="150"
						html={
							<>
								<p className="text-white leading-relaxed mt-4">
									We're committed to provide the best insurance services
									possible that are intended to protect your most valuable
									assets. We also believe that insurance should bring peace of
									mind instead of uncertainty and needless expense. In order to
									do that, we make sure that you understand completely on what
									you're covered for and why by conducting open consultation
									with each client.
								</p>
								<p className="text-white leading-relaxed mt-4">
									We're also committed to thoroughly examine your unique
									situation, whether it be personal or business related, so that
									we can find the coverage that best suits your needs. Providing
									you with the best insurance option for your money is the goal
									behind every suggestion we make.
								</p>
								<p className="text-white leading-relaxed mt-4">
									Finally, we will never suggest unnecessary policies to you. We
									are not here to oversell; we are here to assist you in
									safeguarding your interests. With each client we serve, this
									philosophy establishes the basis of trust and defines our
									work.
								</p>
							</>
						}
					/>

					{/* === Explore Programs === */}
					<section
						className="rounded-2xl p-8 mt-10 mb-10 w-full lg:w-4/5 m-auto shadow-md shadow-(color:--lightgreyblue)"
						style={{ background: 'var(--darkestgradient)' }}
						data-aos="fade-up"
						data-aos-delay="150"
					>
						<div className="flex flex-col sm:justify-center">
							<div
								className={`w-full text-center lg:text-left`}
								style={{
									marginBottom: '0',
									paddingBottom: '.5rem',
								}}
							>
								<h1 className="text-2xl text-center">
									<b style={{ color: 'var(--lightskyblue)' }}>
										Explore Our Insurance Programs
									</b>
								</h1>
							</div>
						</div>
						<p
							className="text-gray-700 leading-relaxed mt-4 text-center"
							style={{ color: 'white' }}
						>
							We offer a wide mix of insurance programs because we believe
							flexibility matters. You'll find everything here, from personal
							coverage to more complicated corporate solutions. Maybe you need
							health insurance. Maybe it's property, motor, travel, marine, or
							business liability. Either way, we've got options that balance
							price and protection, so you're not left deciding between security
							and your budget.
						</p>
						<p
							className="text-gray-700 leading-relaxed mt-4 mb-8 text-center"
							style={{ color: 'white' }}
						>
							To make things simple, check out our interactive Insurance Program
							Mindmap below. It's a visual guide that lays out all the kinds of
							insurance we cover and shows how they fit together. Take a
							look—see if what you need is included and get a feel for how our
							programs work as part of one big, connected protection plan.
						</p>
						<div className="w-full" data-aos="fade-up">
							<InsuranceMindMap />
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
