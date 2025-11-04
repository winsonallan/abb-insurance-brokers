'use client';

import AOS from 'aos';
import { ShieldCheck, Timer, Users } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import MiniHighlight from '@/components/miniHighlight';
import { imagesURL } from '../../../public/support/js/webState';

export default function ClaimsManagementClient() {
	useEffect(() => {
		AOS.init({ duration: 800, once: true, offset: 50 });
	});

	return (
		<>
			<div className="pageContent overflow-x-hidden">
				<div className="page-container pl-12 pr-12">
					<main className="content-wrap">
						<h1
							className="text-3xl mb-4 font-bold"
							style={{ color: 'var(--mainblue)' }}
							data-aos="fade-right"
						>
							Claims Management
						</h1>
						<p data-aos="fade-right">
							Handling insurance claims can be stressful, especially when you’re
							focused on running your business. At ABB Insurance Brokers, we act
							as your dedicated advocate, guiding you through every stage — from
							the moment an incident occurs to the final settlement. Our mission
							is simple: to make claims easy, transparent, and resolved as
							quickly as possible. With our experience and insurer
							relationships, we ensure that your claims are handled
							professionally and your rights are fully protected.
						</p>
						{/* How We Manage Your Claims */}
						<section className="howManage mt-16" data-aos="fade-up">
							<h2
								className="text-2xl mb-4 font-bold mt-8"
								style={{ color: 'var(--darkblue)' }}
							>
								How We Manage Your Claims
							</h2>
							<p>
								A structured and proactive claim management process ensures
								accuracy, speed, and fairness. Our five-step framework is
								designed to minimize hassle and maximize recovery.
							</p>

							<div className="mt-8 relative flex flex-col md:flex-row items-start md:items-stretch justify-between gap-8 md:gap-4 max-w-6xl mx-auto">
								{/* Step Connector (Desktop only) */}
								<div
									className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] z-0"
									style={{ background: 'var(--lightgreyblue)' }}
								></div>

								{/* Step 1 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightgreyblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightgreyblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										1
									</div>
									<h3 className="font-semibold text-lg mb-2">
										Initial Consultation - Understanding the Loss
									</h3>
									<p className="text-gray-600 text-sm">
										We start by discussing the incident and reviewing your
										policy coverage to identify what’s covered, what’s excluded,
										and how to proceed strategically.
									</p>
									<p className="text-gray-500 italic text-xs mt-2">
										Example: Assessing fire damage under a property policy or
										determining liability coverage for a third-party injury.
									</p>
								</div>

								{/* Step 2 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightgreyblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightgreyblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										2
									</div>
									<h3 className="font-semibold text-lg mb-2">
										Claim Preparation - Gathering the Right Information
									</h3>
									<p className="text-gray-600 text-sm">
										Our team assists in compiling the required documentation,
										from claim forms to evidence of loss. We ensure all details
										are accurate and compliant with insurer requirements —
										reducing back-and-forth delays.
									</p>
								</div>

								{/* Step 3 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightgreyblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightgreyblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										3
									</div>
									<h3 className="font-semibold text-lg mb-2">
										Submission & Negotiation - Advocating for You
									</h3>
									<p className="text-gray-600 text-sm">
										We represent your interests when liaising with insurers and
										loss adjusters, ensuring your claim receives the attention
										and fairness it deserves. Our experienced negotiators make
										sure settlements reflect actual loss and policy intent.
									</p>
								</div>

								{/* Step 4 */}
								<div
									className="relative flex-1 text-center p-6 bg-white rounded-2xl shadow-md shadow-(color:--lightgreyblue) border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightgreyblue)"
									style={{ borderColor: 'var(--lightgreyblue)' }}
								>
									<div
										className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold"
										style={{ background: 'var(--darkgradient)' }}
									>
										4
									</div>
									<h3 className="font-semibold text-lg mb-2">
										Resolution & Follow-up - Ensuring Complete Satisfaction
									</h3>
									<p className="text-gray-600 text-sm">
										We monitor the claim’s progress, keeping you updated at
										every stage. Once settled, we review the process together to
										identify potential improvements in your risk or coverage for
										the future.
									</p>
								</div>
							</div>
						</section>
						{/* Claim Support Services */}
						<section
							className="mt-16 claimSupportServices w-full mx-auto px-6"
							data-aos="fade-up"
						>
							{/* Section Heading */}
							<h2
								className="text-2xl font-bold mb-6"
								style={{ color: 'var(--darkblue)' }}
							>
								Claim Support Services
							</h2>

							{/* Intro Paragraph */}
							<p
								className="text-gray-700 leading-relaxed mb-6"
								data-aos="fade-right"
								data-aos-anchor=".claimSupportServices"
								data-aos-delay="50"
							>
								At ABB Insurance Brokers, our role goes far beyond submitting
								insurance claims. We provide comprehensive guidance and hands-on
								support from the moment an incident occurs until the claim is
								fully resolved. Our goal is to make the process simple and
								stress-free for you, keeping you informed and in control every
								step of the way.
							</p>

							<p
								className="text-gray-700 leading-relaxed mb-8"
								data-aos="fade-right"
								data-aos-anchor=".claimSupportServices"
								data-aos-delay="60"
							>
								We assist in selecting experienced loss adjusters familiar with
								your industry, explain technical terms in plain language, and
								proactively handle any obstacles — from missing documentation to
								unclear liability or insurer delays — so your business can keep
								running smoothly.
							</p>

							{/* Mini Highlights with Left-Aligned Heading Above */}
							<h3
								className="text-xl font-semibold mb-4 miniHighlightsHeader"
								style={{ color: 'var(--darkblue)' }}
								data-aos="fade-left"
								data-aos-anchor=".claimSupportServices"
								data-aos-delay="70"
							>
								How We Make Claims Easy for You
							</h3>

							<div
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
								data-aos="fade-up"
								data-aos-anchor=".miniHighlightsHeader"
							>
								<MiniHighlight
									icon="💬"
									title="Transparent Communication"
									description="Clear, timely updates throughout the claim process, keeping you fully informed and confident."
								/>
								<MiniHighlight
									icon="🤝"
									title="Expert Representation"
									description="Our skilled negotiators ensure fair outcomes and the best possible recovery for your claim."
								/>
								<MiniHighlight
									icon="🛡️"
									title="End-to-End Assistance"
									description="From reporting incidents to final settlement, we provide guidance and support at every stage."
								/>
							</div>

							{/* Optional Closing Paragraph for Continuity */}
							<p
								className="text-gray-700 leading-relaxed mt-8 closingParagraph"
								data-aos="fade-right"
								data-aos-anchor=".miniHighlightsHeader"
							>
								Each claim is handled with the utmost care and urgency, ensuring
								not only a fast resolution but also a fair and satisfactory
								outcome. Our team works as an extension of your business,
								removing the burden of claims management so you can focus on
								growth and operations.
							</p>
						</section>
					</main>
				</div>
			</div>
			{/* Claim Expertise */}
			<section
				className="claimExpertise w-full px-6 flex flex-col lg:flex-row items-start gap-8 py-20  overflow-x-hidden"
				style={{
					background: 'var(--superlightoceanblue)',
					alignItems: 'center',
				}}
				data-aos="fade-up"
				data-aos-anchor=".closingParagraph"
			>
				{/* Image on the Left */}
				<div
					className="w-full lg:w-1/2 relative"
					data-aos="fade-right"
					data-aos-anchor=".closingParagraph"
					style={{ minHeight: '420px' }}
				>
					<Image
						src={`${imagesURL}our-services/claims-management/handshake.jpeg`} // replace with actual image
						alt="Professional handshake"
						fill
						style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
					/>
				</div>

				{/* Text on the Right */}
				<div
					className="w-full lg:w-1/2 flex flex-col justify-center"
					data-aos="fade-left"
					data-aos-anchor=".closingParagraph"
				>
					<h2
						className="text-2xl font-bold mb-4"
						style={{ color: 'var(--darkblue)' }}
					>
						The Difference Between a Claim and a Resolution
					</h2>

					<p className="text-gray-700 leading-relaxed mb-4 closingExpertParagraph">
						Insurance claims are more than just paperwork — they define how
						effectively your protection works. Poorly managed claims can result
						in delays, disputes, and financial loss. With ABB Insurance Brokers,
						you gain a proactive partner who understands policy interpretation
						and insurer procedures, ensuring every step moves smoothly toward
						resolution.
					</p>

					<p className="text-gray-700 leading-relaxed">
						Our experience across industries — from construction and logistics
						to finance and manufacturing — allows us to manage complex claims
						efficiently. We don’t simply “file” your claim; we _strategically
						navigate_ it, reviewing every detail to guarantee you receive the
						settlement you’re entitled to without compromise.
					</p>
				</div>
			</section>
			{/* You're Never Left In The Dark Section */}
			<section
				className="w-full bg-gray-50 py-20 overflow-x-hidden"
				data-aos-anchor=".closingExpertParagraph"
				data-aos="fade-up"
			>
				<div
					className="flex flex-col md:flex-row items-start gap-12 px-6 md:px-12"
					style={{ alignItems: 'center' }}
				>
					{/* Left Text Section */}
					<div className="flex-1">
						<h2
							className="text-2xl font-bold mb-6"
							style={{ color: 'var(--darkblue)' }}
						>
							You're Never Left in the Dark
						</h2>

						<p className="text-gray-700 mb-6 leading-relaxed neverLeftDark">
							We believe claim handling should be a collaborative and
							transparent process. That's why we maintain open communication
							throughout every step — updating you regularly and clarifying what
							each milestone means. Our goal is not only to settle your claim
							but also to strengthen your trust in the insurance process.
						</p>

						<p className="text-gray-700 leading-relaxed">
							Every claim, regardless of size, receives personal attention from
							our professional team. Whether it’s a minor vehicle damage or a
							complex property loss, you can expect the same level of care,
							accuracy, and commitment.
						</p>

						{/* Quote Box */}
						<div className="mt-8 border-l-4 border-blue-600 pl-6 italic text-gray-800">
							<p>
								“Our success is measured not by how many claims we close, but by
								how many clients feel supported from start to finish.”
							</p>
						</div>
					</div>

					{/* Right Image */}
					<div className="flex-1 w-full relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-md closingChooseUs">
						<Image
							src={`${imagesURL}our-services/claims-management/collab.jpeg`} // replace with your actual image path later
							alt="Collaboration Illustration"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
				</div>
			</section>
			{/* Why Choose ABB */}
			<section
				className="w-full py-20 overflow-x-hidden"
				style={{ background: 'var(--superlightoceanblue)' }}
				data-aos-anchor=".neverLeftDark"
				data-aos="fade-up"
			>
				<div className="px-6 md:px-12 flex flex-col gap-12">
					{/* Section Header */}
					<div>
						<h2
							className="text-2xl font-bold mb-4"
							style={{ color: 'var(--darkblue)' }}
						>
							Why Choose ABB for Your Claim Management
						</h2>
						<p className="text-gray-700 leading-relaxed max-w-3xl">
							With ABB, you gain a dedicated partner who ensures every claim is
							handled efficiently, fairly, and transparently. We act in your
							best interest — not the insurer’s — so you can focus on recovery,
							not red tape.
						</p>
					</div>

					{/* Highlight Cards */}
					<div
						className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
						data-aos-anchor=".closingChooseUs"
						data-aos="fade-up"
					>
						{/* Card 1 */}
						<div
							className="p-8 rounded-2xl shadow-sm border bg-gray-50 hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue)"
							style={{ borderColor: 'var(--lightoceanblue)' }}
						>
							<ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
							<h3
								className="text-xl font-semibold mb-3"
								style={{ color: 'var(--mainblue)' }}
							>
								Experience You Can Rely On
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Over two decades of hands-on experience dealing with insurers,
								loss adjusters, and regulators. We know what works — and what
								doesn’t.
							</p>
						</div>

						{/* Card 2 */}
						<div
							className="p-8 rounded-2xl shadow-sm border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue) bg-gray-50"
							style={{ borderColor: 'var(--lightoceanblue)' }}
						>
							<Users className="w-10 h-10 text-blue-600 mb-4" />
							<h3
								className="text-xl font-semibold mb-3"
								style={{ color: 'var(--mainblue)' }}
							>
								Your Advocate, Not the Insurer’s
							</h3>
							<p className="text-gray-700 leading-relaxed">
								We represent you — ensuring your case is handled fairly and
								without unnecessary compromise.
							</p>
						</div>

						{/* Card 3 */}
						<div
							className="p-8 rounded-2xl shadow-sm border hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue) bg-gray-50"
							style={{ borderColor: 'var(--lightoceanblue)' }}
						>
							<Timer className="w-10 h-10 text-blue-600 mb-4" />
							<h3
								className="text-xl font-semibold mb-3"
								style={{ color: 'var(--mainblue)' }}
							>
								Swift, Fair, Transparent
							</h3>
							<p className="text-gray-700 leading-relaxed">
								Every claim is monitored closely to ensure resolution times are
								short and communications are always open.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
