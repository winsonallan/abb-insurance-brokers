import type { Metadata } from 'next';
import '../../../public/support/css/admin-control-panel.css';
import CareerItem from '@/components/admin-control-panel/careerItem';
import CarouselItem from '@/components/admin-control-panel/carouselItem';
import TeamItem from '@/components/admin-control-panel/teamItem';

export const metadata: Metadata = {
	title: 'Admin Control Panel | ABB Insurance Brokers',
	description: 'Helping you find the best insurance options.',
};

export default function AdminControlPanel() {
	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<h1 className="text-3xl mb-12" style={{ color: 'var(--mainblue)' }}>
						<b>Admin Control Panel</b>
					</h1>
					<div className="editCarouselDiv mb-8">
						<div
							className="w-full flex flex-row mb-2"
							style={{
								alignContent: 'center',
								justifyContent: 'space-between',
							}}
						>
							<h1 className="text-xl" style={{ color: 'var(--darkblue)' }}>
								<b>Homepage Carousel</b>
							</h1>
							<a href="">
								<u>Add Carousel Item</u>&nbsp;&nbsp;
								<i className="fas fa-plus"></i>
							</a>
						</div>
						<div className="flex flex-row gap-x-3 overflow-x-auto w-full">
							<CarouselItem
								fileName="0.jpg"
								heading="The Best In Class"
								text="Suspendisse potenti. Etiam efficitur justo nisl, ut euismod
									est hendrerit et. Phasellus non leo consectetur, sollicitudin
									odio sit amet, dictum felis. Vestibulum tempus in purus at
									feugiat. Sed mattis, risus ut efficitur tempus, augue leo
									sodales purus, nec vehicula sem tortor nec nisi. Praesent
									sollicitudin nibh ut sem auctor, ut feugiat risus auctor.
									Fusce ac gravida nunc. Nunc facilisis tempor facilisis. Donec
									finibus nunc ipsum, eget consequat diam sagittis vitae.
									Praesent arcu odio, vehicula ut nulla ullamcorper, hendrerit
									dignissim magna. Donec non turpis justo."
								fileURL="0.jpeg"
							/>
							<CarouselItem
								fileName="0.jpg"
								heading="The Best In Class"
								text="Suspendisse potenti. Etiam efficitur justo nisl, ut euismod
									est hendrerit et. Phasellus non leo consectetur, sollicitudin
									odio sit amet, dictum felis. Vestibulum tempus in purus at
									feugiat. Sed mattis, risus ut efficitur tempus, augue leo
									sodales purus, nec vehicula sem tortor nec nisi. Praesent
									sollicitudin nibh ut sem auctor, ut feugiat risus auctor.
									Fusce ac gravida nunc. Nunc facilisis tempor facilisis. Donec
									finibus nunc ipsum, eget consequat diam sagittis vitae.
									Praesent arcu odio, vehicula ut nulla ullamcorper, hendrerit
									dignissim magna. Donec non turpis justo."
								fileURL="0.jpeg"
							/>
							<CarouselItem
								fileName="0.jpg"
								heading="The Best In Class"
								text="Suspendisse potenti. Etiam efficitur justo nisl, ut euismod
									est hendrerit et. Phasellus non leo consectetur, sollicitudin
									odio sit amet, dictum felis. Vestibulum tempus in purus at
									feugiat. Sed mattis, risus ut efficitur tempus, augue leo
									sodales purus, nec vehicula sem tortor nec nisi. Praesent
									sollicitudin nibh ut sem auctor, ut feugiat risus auctor.
									Fusce ac gravida nunc. Nunc facilisis tempor facilisis. Donec
									finibus nunc ipsum, eget consequat diam sagittis vitae.
									Praesent arcu odio, vehicula ut nulla ullamcorper, hendrerit
									dignissim magna. Donec non turpis justo."
								fileURL="0.jpeg"
							/>
							<CarouselItem
								fileName="0.jpg"
								heading="The Best In Class"
								text="Suspendisse potenti. Etiam efficitur justo nisl, ut euismod
									est hendrerit et. Phasellus non leo consectetur, sollicitudin
									odio sit amet, dictum felis. Vestibulum tempus in purus at
									feugiat. Sed mattis, risus ut efficitur tempus, augue leo
									sodales purus, nec vehicula sem tortor nec nisi. Praesent
									sollicitudin nibh ut sem auctor, ut feugiat risus auctor.
									Fusce ac gravida nunc. Nunc facilisis tempor facilisis. Donec
									finibus nunc ipsum, eget consequat diam sagittis vitae.
									Praesent arcu odio, vehicula ut nulla ullamcorper, hendrerit
									dignissim magna. Donec non turpis justo."
								fileURL="0.jpeg"
							/>
							<CarouselItem
								fileName="0.jpg"
								heading="The Best In Class"
								text="Suspendisse potenti. Etiam efficitur justo nisl, ut euismod
									est hendrerit et. Phasellus non leo consectetur, sollicitudin
									odio sit amet, dictum felis. Vestibulum tempus in purus at
									feugiat. Sed mattis, risus ut efficitur tempus, augue leo
									sodales purus, nec vehicula sem tortor nec nisi. Praesent
									sollicitudin nibh ut sem auctor, ut feugiat risus auctor.
									Fusce ac gravida nunc. Nunc facilisis tempor facilisis. Donec
									finibus nunc ipsum, eget consequat diam sagittis vitae.
									Praesent arcu odio, vehicula ut nulla ullamcorper, hendrerit
									dignissim magna. Donec non turpis justo."
								fileURL="0.jpeg"
							/>
						</div>
					</div>
					<div className="editTeam">
						<div
							className="w-full flex flex-row mb-2"
							style={{
								alignContent: 'center',
								justifyContent: 'space-between',
							}}
						>
							<h1 className="text-xl" style={{ color: 'var(--darkblue)' }}>
								<b>Team</b>
							</h1>
							<a href="">
								<u>Add Team Member</u>&nbsp;&nbsp;
								<i className="fas fa-plus"></i>
							</a>
						</div>
						<div className="flex flex-row gap-x-3 overflow-x-auto w-full mb-8">
							<TeamItem
								fileName="0.jpg"
								name="Herdi Santoso, S.Kom., AAIK., AMRP, CIIB, ANZIIF (Fellow) CIP"
								position="President Director & CEO"
								miniBio="Herdi is an insurance professional with over 25 years of extensive experience. He holds a Bachelor's degree in Computer Science from Bina Nusantara University and various professional certifications such as AAIK, AMRP from AAMAI & BNSP, CIIB from APARI, and is a Fellow CIP of ANZIIF (Australia & New Zealand). He started his career as a Management Trainee at PT Asuransi Artarindo, then joined PT Arthagraha General Insurance, rising to President Director. He also served as Commissioner at PT UAF Jaminan Kredit. In 2014, he joined PT Asuransi Multi Artha Guna Tbk as Operational Director and has been with PT ABB Insurance Brokers since 2015. He is also a Commissioner at PT Artha Dana Mandiri (Artha Reinsurance Brokers) since 2010."
								fileURL="0.jpeg"
							/>
						</div>
					</div>
					<div className="editCareers">
						<div
							className="w-full flex flex-row mb-2"
							style={{
								alignContent: 'center',
								justifyContent: 'space-between',
							}}
						>
							<h1 className="text-xl" style={{ color: 'var(--darkblue)' }}>
								<b>Careers</b>
							</h1>
							<a href="">
								<u>Add Job Listing</u>&nbsp;&nbsp;
								<i className="fas fa-plus"></i>
							</a>
						</div>
						<div className="flex flex-row gap-x-3 overflow-x-auto w-full mb-8">
							<CareerItem
								title="Android Developer"
								department="IT Department"
								type="Full Time"
								location="On Site"
								keyResponsibilities="In lacinia feugiat ex. Proin id diam a nunc viverra lacinia placerat ac urna. Sed porttitor tellus lectus. Proin feugiat enim sem, eget egestas tellus bibendum in. Sed sed finibus diam. Maecenas posuere turpis in mollis consequat. Integer mi ligula, consequat in suscipit quis, ultrices eget urna."
								requirements="
									- Experience in using Angular, Ionic or Similar Frameworks (3+ Years).
									- Experience in dealing with data in XML and JSON format.
									- Proficient in Java
								"
								email="info_loker@asuransiku.id"
							/>
						</div>
					</div>
					<div className="editNews">
						<h1 className="text-xl mb-2" style={{ color: 'var(--darkblue)' }}>
							<b>News</b>
						</h1>
						<div
							className="w-full mb-8"
							style={{
								alignContent: 'center',
								justifyContent: 'center',
							}}
						>
							<a href="/admin-control-panel/news">
								Click here&nbsp;&nbsp;
								<i className="fas fa-external-link"></i>
							</a>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
