'use client';

import AOS from 'aos';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';
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
						className="py-12 px-6 rounded-xl"
						style={{
							background:
								'linear-gradient(180deg, var(--whiteblue), var(--superlightoceanblue))',
						}}
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
					<section className="py-12 mt-10" data-aos="fade-up">
						<h2
							className="text-2xl font-bold mb-6"
							style={{ color: 'var(--darkblue)' }}
						>
							Our Focus Areas
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{/* Card 1 */}
							<div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--almostwhite)]">
								<div className="text-4xl mb-3">📋</div>
								<h3
									className="font-semibold mb-2"
									style={{ color: 'var(--darkblue)' }}
								>
									Comprehensive Advisory
								</h3>
								<p className="text-gray-600 text-sm">
									We assess exposure across contracts, operations and assets —
									then prioritise protections that matter.
								</p>
							</div>

							{/* Card 2 */}
							<div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--almostwhite)]">
								<div className="text-4xl mb-3">🔎</div>
								<h3
									className="font-semibold mb-2"
									style={{ color: 'var(--darkblue)' }}
								>
									Market Insight
								</h3>
								<p className="text-gray-600 text-sm">
									We access multiple insurers and programs so you get
									competitive terms and appropriate capacity.
								</p>
							</div>

							{/* Card 3 */}
							<div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--almostwhite)]">
								<div className="text-4xl mb-3">⚖️</div>
								<h3
									className="font-semibold mb-2"
									style={{ color: 'var(--darkblue)' }}
								>
									Risk-aware Design
								</h3>
								<p className="text-gray-600 text-sm">
									Program design aligns cover with business priorities —
									limiting gaps and overlap across lines.
								</p>
							</div>

							{/* Card 4 */}
							<div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--almostwhite)]">
								<div className="text-4xl mb-3">🔁</div>
								<h3
									className="font-semibold mb-2"
									style={{ color: 'var(--darkblue)' }}
								>
									Efficient Administration
								</h3>
								<p className="text-gray-600 text-sm">
									Policy management, endorsements and renewals handled with
									documented processes and clear timelines.
								</p>
							</div>
						</div>
					</section>

					{/* HOW WE WORK (stepper) */}
					<section
						className="py-12 mt-12 rounded-xl px-6"
						style={{ background: 'var(--superlightoceanblue)' }}
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
									className="flex-1 bg-white rounded-2xl p-6 shadow-sm border"
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
									className="flex-1 bg-white rounded-2xl p-6 shadow-sm border"
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
									className="flex-1 bg-white rounded-2xl p-6 shadow-sm border"
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
									className="flex-1 bg-white rounded-2xl p-6 shadow-sm border"
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
					<section className="py-12 mt-1" data-aos="fade-up">
						<div className="px-6">
							<h3
								className="text-xl font-semibold mb-4"
								style={{ color: 'var(--darkblue)' }}
							>
								Our Ongoing Commitment
							</h3>
							<p className="text-gray-700 leading-relaxed">
								ABB will continue to act as your insurance partner — explaining
								policy details, managing renewals, and supporting claims
								advocacy where needed. We aim to keep your protection aligned
								with the way you run your business, and to make insurance a
								manageable, useful component of your risk strategy.
							</p>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
