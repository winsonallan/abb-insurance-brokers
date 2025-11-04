'use client';

import AOS from 'aos';
import Image from 'next/image';
import { useEffect } from 'react';
import { imagesURL } from '../../../public/support/js/webState';

export default function RiskManagementClient() {
	useEffect(() => {
		AOS.init({ duration: 800, once: true, offset: 80 });
	});

	return (
		<>
			<div className="pageContent">
				<div className="page-container pl-12 pr-12">
					<main className="content-wrap">
						<h1
							className="text-3xl mb-4 font-bold"
							style={{ color: 'var(--mainblue)' }}
							data-aos="fade-right"
						>
							Risk Management
						</h1>
						<p data-aos="fade-right">
							Risk is inevitable — poor risk decisions are not. ABB Insurance
							Brokers helps businesses of every size identify exposures in
							contracts, tenders, and operations; qualify which risks are
							insurable; and design strategies that protect cashflow,
							reputation, and continuity. Our goal is to transform uncertainty
							into predictable outcomes.
						</p>
						<section className="contractReview mb-8" data-aos="fade-right">
							<h2
								className="text-2xl mb-4 font-bold mt-8"
								style={{ color: 'var(--darkblue)' }}
							>
								Contract & Tender Review
							</h2>
							<div
								className="grid grid-cols-2 px-8 py-4"
								style={{
									background:
										'linear-gradient(180deg, var(--whiteblue), var(--background))',
									borderRadius: '.5rem',
								}}
							>
								<div
									className="col-span-2 lg:col-span-1"
									style={{ alignContent: 'center' }}
								>
									<ol style={{ alignContent: 'center' }}>
										<li className="mb-4">
											<b style={{ color: 'var(--darkblue)' }}>
												Identify Risk Exposure
											</b>{' '}
											<br />
											We analyze liability clauses, indemnities, limitation of
											liability, warranties, and delivery/completion clauses to
											reveal obligations that could create financial exposure.
										</li>
										<li className="mb-4">
											<b style={{ color: 'var(--darkblue)' }}>
												Distinguish Insurable vs. Uninsurable Risks
											</b>{' '}
											<br />
											Some contractual risks (e.g., reputational damage,
											punitive fines) are not insurable or have limited
											coverage. We explain which risks insurers will accept and
											which you should manage via process changes or contractual
											renegotiation.
										</li>
										<li className="mb-4">
											<b style={{ color: 'var(--darkblue)' }}>
												Recommend Practical Changes
											</b>{' '}
											<br />
											For risks that cannot be insured, we suggest operational
											controls, financial reserving, or alternative contract
											language that reduces your exposure while keeping the deal
											commercially viable.
										</li>
									</ol>
								</div>
								<div className="col-span-2 lg:col-span-1">
									<div
										className="image h-full w-full col-span-2 lg:col-span-1 relative lg:block"
										style={{
											alignContent: 'center',
											alignItems: 'center',
											borderRadius: '.5rem',
										}}
									>
										<Image
											src={`${imagesURL}our-services/risk-management/contract.jpeg`}
											width={500}
											height={500}
											alt="Contract & Tender Review"
											style={{
												objectFit: 'cover',
												borderRadius: '.5rem',
											}}
											className="m-auto lg:mr-0 transition-transform duration-300 hover:scale-[1.02]"
										/>
									</div>
								</div>
							</div>
						</section>
						<section
							className="riskProfiling mt-16 bg-gray-50 px-8 py-4"
							data-aos="fade-up"
						>
							<h2
								className="text-2xl mb-4 font-bold mt-8"
								style={{ color: 'var(--darkblue)' }}
							>
								Risk Profiling - Know What You're at Risk For
							</h2>
							<p className="mx-auto text-gray-700 mb-12">
								A clear risk profile turns scattered concerns into a prioritized
								list of exposures you can manage. Our process groups and scores
								risks by likelihood and financial impact to create a targeted,
								actionable view of where to focus your resources. This
								structured approach ensures that every potential threat is
								identified and addressed before it grows into a costly issue.
								With data-driven insights, we help you make smarter, more
								confident decisions for the long-term stability of your
								business.
							</p>

							<div className="relative flex flex-col md:flex-row items-start md:items-stretch justify-between gap-8 md:gap-4 max-w-6xl mx-auto mb-8">
								{/* Step Connector (Desktop only) */}
								<div
									className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] z-0"
									style={{ background: 'var(--lightgreyblue)' }}
								></div>

								{/* Step 1 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										1
									</div>
									<h3
										className="font-semibold text-lg mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Identification — Map your exposures
									</h3>
									<p className="text-gray-600 text-sm">
										We collect information on your operations, assets,
										contracts, people, and revenue streams to capture every
										plausible source of loss.
									</p>
									<p className="text-gray-500 italic text-xs mt-2">
										Example: What assets are mission-critical? Which contracts
										impose penalties?
									</p>
								</div>

								{/* Step 2 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										2
									</div>
									<h3
										className="font-semibold text-lg mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Categorization — Group risks logically
									</h3>
									<p className="text-gray-600 text-sm">
										Risks are grouped into Assets, Legal Liabilities, People,
										and Revenue to compare like-with-like and avoid duplication.
									</p>
									<p className="text-gray-500 italic text-xs mt-2">
										Example: Machinery downtime → Asset risk; Contractual
										indemnity → Legal risk.
									</p>
								</div>

								{/* Step 3 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										3
									</div>
									<h3
										className="font-semibold text-lg mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Assessment — Score impact and likelihood
									</h3>
									<p className="text-gray-600 text-sm">
										Each risk is evaluated for potential financial loss,
										reputational damage, and operational disruption, creating a
										clear priority scale.
									</p>
								</div>

								{/* Step 4 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightoceanblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										4
									</div>
									<h3
										className="font-semibold text-lg mb-2"
										style={{ color: 'var(--darkblue)' }}
									>
										Recommendation — Prioritize actions
									</h3>
									<p className="text-gray-600 text-sm">
										We recommend a mix of insurance placement, contractual
										adjustments, and process improvements — prioritized by
										cost-effectiveness and impact.
									</p>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
			<section
				id="strategy"
				className="riskStrategy py-16 mt-8"
				data-aos="fade-up"
				style={{
					borderRadius: '.5rem',
					background:
						'linear-gradient(180deg, var(--whiteblue), var(--background))',
				}}
			>
				<div className="max-w-6xl mx-auto px-6">
					<h2
						className="text-2xl font-bold mb-6 text-center"
						style={{ color: 'var(--darkblue)' }}
					>
						Risk Management Strategy — Practical Options, Clear Outcomes
					</h2>

					<p className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
						Once risks are profiled, we craft a strategy tailored to your
						appetite and capacity. Strategies fall into four practical buckets —
						avoid, transfer, retain, mitigate — and we help you apply the right
						mix for your business.
					</p>

					{/* Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Avoidance */}
						<div
							className="group bg-white rounded-2xl shadow-md border  p-6 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
							style={{ borderColor: 'var(--lightoceanblue)' }}
						>
							<div className="mb-4 flex items-center justify-center">
								<span className="text-4xl">🚫</span>
							</div>
							<h3 className="font-semibold text-xl mb-2 text-center text-blue-700">
								Avoidance
							</h3>
							<p className="text-gray-600 text-sm mb-4 text-center">
								Stop or change activities that generate unacceptable risks.
								Ideal for high-severity exposures with minimal commercial
								upside.
							</p>
							<div className="text-center text-gray-500 italic text-xs">
								Example: Remove a high-risk clause from a tender requirement or
								cease a service line.
							</div>
						</div>

						{/* Transfer */}
						<div
							className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
							style={{ borderColor: 'var(--lightoceanblue)' }}
						>
							<div className="mb-4 flex items-center justify-center">
								<span className="text-4xl">📜</span>
							</div>
							<h3 className="font-semibold text-xl mb-2 text-center text-blue-700">
								Transfer (Insurance & Contracts)
							</h3>
							<p className="text-gray-600 text-sm mb-4 text-center">
								Shift the financial burden of loss to another party or insurer.
								Best for operational or asset-based risks.
							</p>
							<div className="text-center text-gray-500 italic text-xs">
								Example: Place marine cargo insurance or negotiate indemnity
								caps with suppliers.
							</div>
						</div>

						{/* Retention */}
						<div
							className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
							style={{ borderColor: 'var(--lightoceanblue)' }}
						>
							<div className="mb-4 flex items-center justify-center">
								<span className="text-4xl">💰</span>
							</div>
							<h3 className="font-semibold text-xl mb-2 text-center text-blue-700">
								Retention (Self-insurance)
							</h3>
							<p className="text-gray-600 text-sm mb-4 text-center">
								Accept and budget for predictable, low-cost risks where
								insurance is uneconomical.
							</p>
							<div className="text-center text-gray-500 italic text-xs">
								Example: Maintain a contingency fund for minor equipment
								repairs.
							</div>
						</div>

						{/* Mitigation */}
						<div
							className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition hover:shadow-xl hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
							style={{ borderColor: 'var(--lightoceanblue)' }}
						>
							<div className="mb-4 flex items-center justify-center">
								<span className="text-4xl">🛡️</span>
							</div>
							<h3 className="font-semibold text-xl mb-2 text-center text-blue-700">
								Mitigation (Reducing Likelihood or Impact)
							</h3>
							<p className="text-gray-600 text-sm mb-4 text-center">
								Invest in controls that lower the probability or severity of
								loss events. Ideal for risks manageable through process or
								technology.
							</p>
							<div className="text-center text-gray-500 italic text-xs">
								Example: Implement safety protocols, staff training, or
								redundancy systems.
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Closing Section — Building Resilience Together */}
			<section
				className="w-95/100 py-20 overflow-x-hidden m-auto mb-16 mt-8"
				style={{
					background: 'var(--darktolightgradient)',
					borderRadius: '.5rem',
					color: 'white',
				}}
				data-aos="fade-up"
			>
				<div className="px-6 md:px-12 flex flex-col gap-12">
					{/* Header */}
					<div>
						<h2 className="text-2xl font-bold mb-4">
							Building Resilience, Together
						</h2>
						<p className="text-white/90 leading-relaxed max-w-3xl">
							Risk management is more than analysis — it’s foresight in action.
							At ABB, we work side by side with you to strengthen your
							organization’s ability to withstand uncertainty, adapt quickly,
							and thrive even in volatile conditions.
						</p>
					</div>

					{/* Highlights */}
					<div
						className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						{/* Card 1 */}
						<div
							className="p-8 rounded-2xl shadow-sm border bg-white hover:shadow-lg transition duration-300 hover:-translate-y-1"
							style={{
								borderColor: 'var(--lightoceanblue)',
								color: 'var(--darkblue)',
							}}
						>
							<h3
								className="text-xl font-semibold mb-3"
								style={{ color: 'var(--mainblue)' }}
							>
								Proactive, Not Reactive
							</h3>
							<p className="text-gray-700 leading-relaxed">
								We identify vulnerabilities before they become losses — ensuring
								risk isn’t just managed, but minimized through strategic
								foresight and continuous monitoring.
							</p>
						</div>

						{/* Card 2 */}
						<div
							className="p-8 rounded-2xl shadow-sm border bg-white hover:shadow-lg transition duration-300 hover:-translate-y-1"
							style={{
								borderColor: 'var(--lightoceanblue)',
								color: 'var(--darkblue)',
							}}
						>
							<h3
								className="text-xl font-semibold mb-3"
								style={{ color: 'var(--mainblue)' }}
							>
								Integrated Risk Approach
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Our frameworks align insurance, operations, and compliance —
								giving you a unified strategy that turns uncertainty into
								opportunity.
							</p>
						</div>

						{/* Card 3 */}
						<div
							className="p-8 rounded-2xl shadow-sm border bg-white hover:shadow-lg transition duration-300 hover:-translate-y-1"
							style={{
								borderColor: 'var(--lightoceanblue)',
								color: 'var(--darkblue)',
							}}
						>
							<h3
								className="text-xl font-semibold mb-3"
								style={{ color: 'var(--mainblue)' }}
							>
								Confidence Through Clarity
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Our transparent reporting and expert insights ensure you always
								know where you stand — empowering confident decision-making
								across every level of your organization.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
