import Image from 'next/image';
import MainPoint from '@/components/mainPoint';
import '../../../public/support/css/homepage.css';
import type { Metadata } from 'next';
import { imagesURL } from '../../../public/support/js/webState';

export const metadata: Metadata = {
	title: 'Our Products & Services | ABB Insurance Brokers ',
	description: 'Helping you find the best insurance options.',
};

export default function Products() {
	return (
		<div className="pageContent">
			<div className="page-container">
				<main className="content-wrap">
					<MainPoint pointText="Our Products" pointClassName="leftPoint" />
					<div className="w-full hidden lg:block">
						<div className="pointContent h-[500px] flex">
							<div
								className="pointLeft flex flex-col"
								style={{ justifyContent: 'center' }}
							>
								<div className="pointText left">
									<div className="pointHeading">
										<h1 className="text-2xl productHeadingText">
											<b>Asuransiku.id</b>
										</h1>
									</div>
									<div className="pointDetails">
										Asuransiku.id is a technology-driven insurance brokerage
										platform designed to make finding the right coverage
										effortless. In today’s digital era — where internet access
										is widespread and customers expect speed and convenience —
										you no longer need to meet with insurance agents
										face-to-face. Through our platform, you can easily explore
										and compare trusted insurance options from reputable
										providers, all curated to match your unique needs. Whether
										you’re looking to protect your vehicle, property, life, or
										travels, Asuransiku.id delivers transparent information,
										competitive offers, and a seamless experience — helping you
										make smarter insurance decisions, anytime and anywhere.
									</div>
									<div style={{ marginTop: '2rem' }}>
										<a href="https://www.asuransiku.id">
											&gt; Visit Asuransiku.id
										</a>
										<br />
										<a href="https://play.google.com/store/apps/details?id=id.asuransiku.app.abb">
											&gt; Download and install the Asuransiku.id app (Android)
										</a>
										<br />
										<a href="https://play.google.com/store/apps/details?id=id.asuransiku.pro">
											&gt; Download and install the Asuransiku.id Pro app
											(Android)
										</a>
									</div>
								</div>
							</div>
							<div className="pointRight">
								<div className="pointImage">
									<Image
										src={`${imagesURL}our-products/asuransiku-id.png`}
										alt="Carousel background"
										fill
										style={{
											objectFit: 'contain',
											outline: '1px solid #fff',
											borderRadius: '.7rem',
											border: '6px solid var(--mainblue)',
											padding: '1rem',
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full block lg:hidden">
						<div className="pointContent flex flex-col">
							<div>
								<div className="pointImage text-center">
									<Image
										src={`${imagesURL}our-products/asuransiku-id.png`}
										alt="Carousel background"
										width={600}
										height={300}
										style={{
											objectFit: 'contain',
											outline: '1px solid #fff',
											borderRadius: '.7rem',
											border: '6px solid var(--mainblue)',
											padding: '1rem',
											margin: 'auto',
										}}
									/>
								</div>
							</div>
							<div
								className="flex flex-col mt-6"
								style={{ justifyContent: 'center' }}
							>
								<div className="pointText">
									<div className="pointHeading text-center">
										<h1 className="text-2xl productHeadingText">
											<b>Asuransiku.id</b>
										</h1>
									</div>
									<div className="pointDetails text-center">
										Asuransiku.id is a technology-driven insurance brokerage
										platform designed to make finding the right coverage
										effortless. In today’s digital era — where internet access
										is widespread and customers expect speed and convenience —
										you no longer need to meet with insurance agents
										face-to-face. Through our platform, you can easily explore
										and compare trusted insurance options from reputable
										providers, all curated to match your unique needs. Whether
										you’re looking to protect your vehicle, property, life, or
										travels, Asuransiku.id delivers transparent information,
										competitive offers, and a seamless experience — helping you
										make smarter insurance decisions, anytime and anywhere.
									</div>
									<div style={{ marginTop: '2rem', textAlign: 'center' }}>
										<a href="https://www.asuransiku.id">Visit Asuransiku.id</a>
										<br />
										<br />
										<a href="https://play.google.com/store/apps/details?id=id.asuransiku.app.abb">
											Download and install the Asuransiku.id app (Android)
										</a>
										<br />
										<br />
										<a href="https://play.google.com/store/apps/details?id=id.asuransiku.pro">
											Download and install the Asuransiku.id Pro app (Android)
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<MainPoint pointText="Our Services" pointClassName="leftPoint" />
					<div className="w-full hidden lg:block">
						<div className="pointContent h-[500px] flex">
							<div
								className="pointLeft flex flex-col"
								style={{ justifyContent: 'center' }}
							>
								<div className="pointText left">
									<div className="pointHeading">
										<h1 className="text-2xl productHeadingText">
											<b>Claims Management</b>
										</h1>
									</div>
									<div className="pointDetails">
										When an incident occurs, the true value of your insurance
										partner is revealed. ABB stands beside you from the very
										first report of loss through to final settlement, ensuring
										the process is clear, efficient, and stress-free. Our claims
										management philosophy centers on reducing your
										administrative burden while protecting your best interests
										at every stage. We guide you in preparing accurate
										documentation, liaising directly with insurers, and engaging
										qualified loss adjusters who truly understand your business.
										From evaluating whether repair or replacement serves you
										better to negotiating fair settlements, we manage every
										detail so you can focus on recovery. Transparent
										communication, timely updates, and proactive advocacy —
										that’s how ABB ensures your claim is handled with the
										professionalism and care your business deserves.
									</div>
									<div style={{ marginTop: '2rem' }}>
										<a href="/claims-management">Learn More &gt;&gt;</a>
									</div>
								</div>
							</div>
							<div className="pointRight">
								<div className="pointImage">
									<Image
										src={`${imagesURL}our-services/claims-management.jpeg`}
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

						<div className="pointContent h-[500px] flex">
							<div className="pointRight">
								<div className="pointImage">
									<Image
										src={`${imagesURL}our-services/risk-management.jpeg`}
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
										<h1 className="text-2xl productHeadingText">
											<b>Risk Management</b>
										</h1>
									</div>
									<div className="pointDetails">
										Effective risk management begins long before a policy is
										signed — it starts with understanding where your true
										exposures lie. At ABB, we help businesses navigate complex
										contracts and tenders to uncover hidden liabilities and
										clarify which risks can or cannot be insured. Our
										comprehensive approach ensures you make informed decisions —
										whether that means adjusting terms, refining internal
										processes, or setting aside reserves for uninsurable risks.
										Beyond reviewing existing agreements, we provide guidance,
										training, and practical solutions that strengthen your
										organization’s ability to anticipate and respond to
										challenges. Through detailed risk profiling and assessment,
										we build a complete picture of your operational landscape —
										from assets and people to liabilities and revenue streams —
										ensuring your strategy for risk transfer and retention is as
										resilient as your ambitions.
									</div>
									<div style={{ marginTop: '2rem' }}>
										<a href="/risk-management">Learn More &gt;&gt;</a>
									</div>
								</div>
							</div>
						</div>

						<div className="pointContent h-[500px] flex">
							<div
								className="pointLeft flex flex-col"
								style={{ justifyContent: 'center' }}
							>
								<div className="pointText left">
									<div className="pointHeading">
										<h1 className="text-2xl productHeadingText">
											<b>Insurance Management</b>
										</h1>
									</div>
									<div className="pointDetails">
										Insurance should do more than just protect — it should
										empower. At ABB, we approach insurance management as a
										partnership built on transparency, understanding, and
										long-term value. Our goal is to help you make confident
										decisions by identifying only the coverage that truly serves
										your needs, ensuring every policy contributes real
										protection and tangible value. We see insurance not as a
										luxury or a formality, but as a strategic investment in your
										peace of mind and business continuity. Whether you’re
										seeking to safeguard assets, reduce exposure, or optimize
										risk placement, our expertise is focused on aligning the
										right coverage with the right purpose — nothing more,
										nothing less.
									</div>
									<div style={{ marginTop: '2rem' }}>
										<a href="insurance-management">Learn More &gt;&gt;</a>
									</div>
								</div>
							</div>
							<div className="pointRight">
								<div className="pointImage">
									<Image
										src={`${imagesURL}our-services/insurance-management.jpeg`}
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

					<div className="w-full block lg:hidden">
						<div className="pointContent flex flex-col">
							<div>
								<div className="pointImageVertical text-center">
									<Image
										src={`${imagesURL}our-services/claims-management.jpeg`}
										alt="Carousel background"
										width={600}
										height={300}
										style={{
											objectFit: 'cover',
											outline: '1px solid #fff',
											borderRadius: '.7rem',
											margin: 'auto',
											height: '300px',
										}}
									/>
								</div>
							</div>
							<div
								className="flex flex-col mt-6"
								style={{ justifyContent: 'center' }}
							>
								<div className="pointText">
									<div className="pointHeading text-center">
										<h1 className="text-2xl productHeadingText">
											<b>Claims Management</b>
										</h1>
									</div>
									<div className="pointDetails text-center">
										When an incident occurs, the true value of your insurance
										partner is revealed. ABB stands beside you from the very
										first report of loss through to final settlement, ensuring
										the process is clear, efficient, and stress-free. Our claims
										management philosophy centers on reducing your
										administrative burden while protecting your best interests
										at every stage. We guide you in preparing accurate
										documentation, liaising directly with insurers, and engaging
										qualified loss adjusters who truly understand your business.
										From evaluating whether repair or replacement serves you
										better to negotiating fair settlements, we manage every
										detail so you can focus on recovery. Transparent
										communication, timely updates, and proactive advocacy —
										that’s how ABB ensures your claim is handled with the
										professionalism and care your business deserves.
									</div>
									<div style={{ marginTop: '2rem', textAlign: 'center' }}>
										<a href="/claims-management">Learn More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="pointContent flex flex-col">
							<div>
								<div className="pointImageVertical text-center">
									<Image
										src={`${imagesURL}our-services/risk-management.jpeg`}
										alt="Carousel background"
										width={600}
										height={300}
										style={{
											objectFit: 'cover',
											outline: '1px solid #fff',
											borderRadius: '.7rem',
											margin: 'auto',
										}}
									/>
								</div>
							</div>
							<div
								className="flex flex-col mt-6"
								style={{ justifyContent: 'center' }}
							>
								<div className="pointText">
									<div className="pointHeading text-center">
										<h1 className="text-2xl productHeadingText">
											<b>Risk Management</b>
										</h1>
									</div>
									<div className="pointDetails text-center">
										Effective risk management begins long before a policy is
										signed — it starts with understanding where your true
										exposures lie. At ABB, we help businesses navigate complex
										contracts and tenders to uncover hidden liabilities and
										clarify which risks can or cannot be insured. Our
										comprehensive approach ensures you make informed decisions —
										whether that means adjusting terms, refining internal
										processes, or setting aside reserves for uninsurable risks.
										Beyond reviewing existing agreements, we provide guidance,
										training, and practical solutions that strengthen your
										organization’s ability to anticipate and respond to
										challenges. Through detailed risk profiling and assessment,
										we build a complete picture of your operational landscape —
										from assets and people to liabilities and revenue streams —
										ensuring your strategy for risk transfer and retention is as
										resilient as your ambitions.
									</div>
									<div style={{ marginTop: '2rem', textAlign: 'center' }}>
										<a href="/claims-management">Learn More</a>
									</div>
								</div>
							</div>
						</div>
						<div className="pointContent flex flex-col">
							<div>
								<div className="pointImageVertical text-center">
									<Image
										src={`${imagesURL}our-services/insurance-management.jpeg`}
										alt="Carousel background"
										width={600}
										height={300}
										style={{
											objectFit: 'cover',
											outline: '1px solid #fff',
											borderRadius: '.7rem',
											margin: 'auto',
										}}
									/>
								</div>
							</div>
							<div
								className="flex flex-col mt-6"
								style={{ justifyContent: 'center' }}
							>
								<div className="pointText">
									<div className="pointHeading text-center">
										<h1 className="text-2xl productHeadingText">
											<b>Insurance Management</b>
										</h1>
									</div>
									<div className="pointDetails text-center">
										Insurance should do more than just protect — it should
										empower. At ABB, we approach insurance management as a
										partnership built on transparency, understanding, and
										long-term value. Our goal is to help you make confident
										decisions by identifying only the coverage that truly serves
										your needs, ensuring every policy contributes real
										protection and tangible value. We see insurance not as a
										luxury or a formality, but as a strategic investment in your
										peace of mind and business continuity. Whether you’re
										seeking to safeguard assets, reduce exposure, or optimize
										risk placement, our expertise is focused on aligning the
										right coverage with the right purpose — nothing more,
										nothing less.
									</div>
									<div style={{ marginTop: '2rem', textAlign: 'center' }}>
										<a href="/insurance-management">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
