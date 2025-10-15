import Image from 'next/image';
import MainPoint from '@/components/mainPoint';
import '../../../public/support/css/homepage.css';

export const metadata: Metadata = {
	title: 'Our Products & Services | ABB Insurance Brokers ',
	description: 'Helping you find the best insurance options.',
};

export default function Products() {
	return (
		<div className="pageContent">
			<div className="page-container">
				<main className="content-wrap">
					<MainPoint pointText="Our Products" />
					<div className="pointContent flex">
						<div
							className="pointLeft flex flex-col"
							style={{ justifyContent: 'center' }}
						>
							<div className="pointText left">
								<div className="pointHeading">
									<h1 className="text-2xl">
										<b>Asuransiku.id</b>
									</h1>
								</div>
								<div className="pointDetails">
									In rhoncus leo in purus iaculis pulvinar. Curabitur ac
									elementum nisi. In scelerisque risus ut felis dapibus, sit
									amet pretium diam convallis. Aenean sagittis lacus sit amet
									vestibulum vehicula. Mauris rhoncus nulla in erat dignissim,
									quis sollicitudin libero ornare. Nam cursus libero arcu,
									accumsan cursus mi aliquet sed. Phasellus dignissim purus at
									justo fermentum mattis.
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
									src={`/support/images/our-products/asuransiku-id.png`}
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

					<MainPoint pointText="Our Services" />
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
									In rhoncus leo in purus iaculis pulvinar. Curabitur ac
									elementum nisi. In scelerisque risus ut felis dapibus, sit
									amet pretium diam convallis. Aenean sagittis lacus sit amet
									vestibulum vehicula. Mauris rhoncus nulla in erat dignissim,
									quis sollicitudin libero ornare. Nam cursus libero arcu,
									accumsan cursus mi aliquet sed. Phasellus dignissim purus at
									justo fermentum mattis.
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
									Sed finibus sapien erat, vitae porttitor metus consequat in.
									Ut ipsum velit, interdum vel diam sit amet, elementum
									ullamcorper justo. Ut pharetra, risus nec mattis auctor,
									libero tellus placerat lacus, id sollicitudin eros nisl sit
									amet erat. Vestibulum hendrerit mauris id convallis fermentum.
									Mauris consectetur sed nisl et volutpat. Vestibulum consequat
									leo sit amet tortor ornare cursus.
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
									Vestibulum et euismod magna, a accumsan ligula. Nunc pretium
									mi velit, quis laoreet lacus mattis quis. Duis malesuada
									dictum ornare.
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
				</main>
			</div>
		</div>
	);
}
