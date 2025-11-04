'use client';

import AOS from 'aos';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';
import MiniHighlight from '@/components/miniHighlight';
import { imagesURL } from '../../../public/support/js/webState';

const InsuranceMindMap = dynamic(() => import('./InsuranceMindMap'), {
	ssr: false,
});

export default function InsuranceManagementClient() {
	useEffect(() => {
		AOS.init({ duration: 800, once: true, offset: 80 });
	}, []);

	return (
		<div className="pageContent w-full">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap w-full">
					{/* HERO */}
					<section className="pb-12" data-aos="fade-right">
						<h1
							className="text-3xl mb-4 font-bold"
							style={{ color: 'var(--mainblue)' }}
						>
							Insurance Management
						</h1>
						<p className="text-gray-700 leading-relaxed mb-2">
							Insurance should do more than just protect — it should enable
							confidence and continuity. At ABB Insurance Brokers we manage
							insurance as an ongoing service: placing appropriate cover,
							clarifying policy intent, and keeping programs aligned with how
							your business actually operates. We focus on clarity, practical
							value and matching cover to genuine exposure.
						</p>
					</section>

					{/* PHILOSOPHY (light gradient) */}
					<section
						className="py-12 px-6 rounded-xl bg-gray-50"
						data-aos="fade-up"
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
							{/* text */}
							<div>
								<h2
									className="text-2xl font-bold mb-4"
									style={{ color: 'var(--darkblue)' }}
								>
									Our Philosophy
								</h2>
								<p className="text-gray-700 mb-4 leading-relaxed">
									We believe insurance must be intelligible and fit-for-purpose.
									That means recommending only the cover that addresses
									identifiable exposures, explaining limits and exclusions
									clearly, and aligning placement with your financial and
									operational objectives.
								</p>
								<p className="text-gray-700 leading-relaxed">
									As brokers, we act on your behalf — sourcing markets,
									negotiating terms, and managing the documentation so your
									program delivers protection without needless complexity.
								</p>
							</div>

							{/* image */}
							<div className="relative h-56 lg:h-64 rounded-lg overflow-hidden">
								<Image
									src={`${imagesURL}our-services/insurance-management/approach.jpeg`}
									alt="Our Philosophy"
									fill
									style={{ objectFit: 'cover' }}
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="transition-transform duration-300 hover:scale-[1.02]"
								/>
							</div>
						</div>
					</section>

					{/* FOCUS AREAS (white) */}
					<section
						className="py-20 mt-16"
						style={{
							background:
								'linear-gradient(180deg, var(--whiteblue), var(--background))',
						}}
					>
						<div className="container mx-auto px-6 md:px-12 text-center">
							<h2
								className="text-3xl md:text-2xl font-bold mb-12 "
								style={{ color: 'var(--darkblue)' }}
							>
								Our Focus Areas
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{/* Risk Identification */}
								<div className="bg-white p-8 rounded-2xl border-l-4 border-(--mainblue) shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-(color:--lightoceanblue)">
									<div className="flex flex-col items-start text-left">
										<div className="mb-4 text-(--mainblue)">
											<i className="fas fa-search text-3xl"></i>
										</div>
										<h3 className="text-xl font-semibold mb-3 text-(--mainblue)">
											Risk Identification
										</h3>
										<p className="text-gray-600">
											We conduct thorough analyses to identify potential risks
											in all business operations, ensuring no hidden
											vulnerabilities go unnoticed.
										</p>
									</div>
								</div>

								{/* Risk Assessment */}
								<div className="bg-white p-8 rounded-2xl border-l-4 border-(--mainblue) shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-(color:--lightoceanblue)">
									<div className="flex flex-col items-start text-left">
										<div className="mb-4 text-(--mainblue)">
											<i className="fas fa-balance-scale text-3xl"></i>
										</div>
										<h3 className="text-xl font-semibold mb-3 text-(--mainblue)">
											Risk Assessment
										</h3>
										<p className="text-gray-600">
											Our specialists evaluate each risk’s likelihood and
											impact, creating a clear hierarchy of priorities for
											informed decision-making.
										</p>
									</div>
								</div>

								{/* Policy Optimization */}
								<div className="bg-white p-8 rounded-2xl border-l-4 border-(--mainblue) shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-(color:--lightoceanblue)">
									<div className="flex flex-col items-start text-left">
										<div className="mb-4 text-(--mainblue)">
											<i className="fas fa-cogs text-3xl"></i>
										</div>
										<h3 className="text-xl font-semibold mb-3 text-(--mainblue)">
											Policy Optimization
										</h3>
										<p className="text-gray-600">
											We help clients align their policies with actual exposure
											levels — reducing costs while ensuring full protection
											where it truly matters.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* HOW WE WORK (stepper) */}
					<section
						className="py-12 mt-12 rounded-xl px-6 bg-gray-50"
						data-aos="fade-up"
					>
						<h2
							className="text-2xl font-bold mb-6"
							style={{ color: 'var(--darkblue)' }}
						>
							How We Work — Practical, Repeatable Steps
						</h2>

						<div className="relative">
							{/* connector line on desktop */}
							<div
								className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px]"
								style={{ background: 'var(--lightgreyblue)', opacity: 0.6 }}
							/>

							<div className="flex flex-col md:flex-row gap-6 relative z-10">
								{/* Step 1 */}
								<div
									className="flex-1 bg-white rounded-2xl p-6  shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mb-3 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										1
									</div>
									<h4
										className="font-semibold mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Discover
									</h4>
									<p className="text-gray-600 text-sm">
										We conduct a focused intake: contracts, existing policies,
										operations and exposures. This determines what can and
										should be insured.
									</p>
								</div>

								{/* Step 2 */}
								<div
									className="flex-1 bg-white rounded-2xl p-6  shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mb-3 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										2
									</div>
									<h4
										className="font-semibold mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Design
									</h4>
									<p className="text-gray-600 text-sm">
										We propose program options — mixing lines, limits and
										deductibles — so coverage matches your risk appetite and
										budget.
									</p>
								</div>

								{/* Step 3 */}
								<div
									className="flex-1 bg-white rounded-2xl p-6  shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mb-3 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										3
									</div>
									<h4
										className="font-semibold mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Place
									</h4>
									<p className="text-gray-600 text-sm">
										We negotiate with insurers, obtain terms, and place the
										chosen program — documenting coverage and obligations
										clearly.
									</p>
								</div>

								{/* Step 4 */}
								<div
									className="flex-1 bg-white rounded-2xl p-6  shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mb-3 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										4
									</div>
									<h4
										className="font-semibold mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Manage
									</h4>
									<p className="text-gray-600 text-sm">
										Policy servicing, renewal planning and ongoing reviews keep
										your protection current as risks evolve.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* MINDMAP */}
					<section
						className="py-16 mt-12"
						data-aos="fade-up"
						style={{
							background:
								'linear-gradient(180deg, var(--whiteblue), var(--background))',
							borderRadius: '.5rem',
						}}
					>
						<div className="px-6">
							<h2
								className="text-2xl font-bold mb-6"
								style={{ color: 'var(--darkblue)' }}
							>
								Explore Our Insurance Programs
							</h2>

							<p className="text-gray-700 mb-6 max-w-3xl">
								We offer a broad range of insurance programs — from personal
								lines to complex corporate solutions such as property, marine,
								aviation, liability and employee benefits. Use the mindmap below
								to explore how these programs connect and where they might apply
								to your business.
							</p>

							<InsuranceMindMap />
						</div>
					</section>

					{/* CLOSING / COMMITMENT */}
					<section
						className="py-16 mt-16 rounded-xl overflow-hidden"
						style={{
							background:
								'linear-gradient(90deg, var(--darkblue) 0%, var(--lightoceanblue) 100%)',
							color: 'white',
						}}
						data-aos="fade-up"
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 items-center">
							<div>
								<h3 className="text-2xl font-bold mb-4">
									Our Ongoing Commitment
								</h3>
								<p className="leading-relaxed text-white/90 mb-4">
									ABB remains engaged well beyond policy placement. We review
									program performance, advise on renewals, and assist with
									claims advocacy when required — ensuring that your coverage
									evolves with your business.
								</p>
								<p className="leading-relaxed text-white/90">
									Our objective is continuity: to keep insurance effective,
									auditable, and proportionate — so it supports your wider risk
									strategy rather than complicating it.
								</p>

								<div className="mt-6">
									<span
										className="inline-block px-5 py-2 rounded-full text-sm font-medium"
										style={{
											backgroundColor: 'rgba(255,255,255,0.1)',
											backdropFilter: 'blur(4px)',
										}}
									>
										We stay engaged beyond policy placement.
									</span>
								</div>
							</div>

							<div className="relative h-56 lg:h-72 rounded-lg overflow-hidden shadow-lg">
								<Image
									src={`${imagesURL}our-services/insurance-management/commitment.jpeg`}
									alt="Our Commitment"
									fill
									style={{ objectFit: 'cover', opacity: 0.85 }}
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
