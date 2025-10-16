'use client';

import '../../../public/support/css/contact-us.css';
import Image from 'next/image';

export default function ContactUsClient() {
	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<h1 className="text-3xl mb-12" style={{ color: 'var(--mainblue)' }}>
						<b>Contact Us</b>
					</h1>
					<div className="flex">
						<div className="formDiv">
							<form action="">
								<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
									<div className="sm:col-span-3">
										<label
											htmlFor="first-name"
											className="block text-sm/6 font-medium text-gray-900"
										>
											First name
										</label>
										<div className="mt-2">
											<input
												id="first-name"
												type="text"
												name="first-name"
												autoComplete="given-name"
												className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
											/>
										</div>
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="last-name"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Last name
										</label>
										<div className="mt-2">
											<input
												id="last-name"
												type="text"
												name="last-name"
												autoComplete="family-name"
												className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
											/>
										</div>
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="email"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Email address
										</label>
										<div className="mt-2">
											<input
												id="email"
												type="email"
												name="email"
												autoComplete="email"
												className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
											/>
										</div>
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="country"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Country
										</label>
										<div className="mt-2 grid grid-cols-1">
											<select
												id="country"
												name="country"
												autoComplete="country-name"
												className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
											>
												<option>United States</option>
												<option>Canada</option>
												<option>Mexico</option>
											</select>
											<svg
												viewBox="0 0 16 16"
												fill="currentColor"
												data-slot="icon"
												aria-hidden="true"
												className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
											>
												<path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
											</svg>
										</div>
									</div>

									<div className="col-span-full">
										<label
											htmlFor="subject"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Subject
										</label>
										<div className="mt-2">
											<input
												id="subject"
												type="text"
												name="subject"
												className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
											/>
										</div>
									</div>

									<div className="col-span-full">
										<label
											htmlFor="contact-message"
											className="block text-sm/6 font-medium text-gray-900"
										>
											Message
										</label>
										<div className="mt-2">
											<textarea
												id="contact-message"
												name="contact-message"
												className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
												style={{ height: '210px' }}
											/>
										</div>
									</div>
								</div>

								<button type="submit" className="contactSubmit">
									Submit
								</button>
							</form>
						</div>
						<div className="contactDiv">
							<div className="contactInfo borderLeftBlue">
								<b style={{ color: 'var(--mainblue)' }}>
									PT. ABB Insurance Brokers{' '}
								</b>
								<br />
								Synergy Building, 15th floor
								<br />
								Jl. Jalur Sutera Barat Kav. 17, Alam Sutera
								<br />
								Tangerang, Banten 15143
								<br />
								Indonesia
							</div>

							<div className="contactInfo borderLeftBlue flex">
								<span style={{ marginRight: '.9rem', color: '#2c923e' }}>
									<i className="fa-solid fa-phone-volume"></i>
								</span>
								+62 21 806 00 828
							</div>

							<div className="contactInfo borderLeftBlue flex">
								<Image
									src={`/support/images/icons/whatsapp.png`}
									alt="WA (Claim)"
									width={20}
									height={20}
									style={{ marginRight: '.9rem', objectFit: 'scale-down' }}
								/>
								+62 878 7502 7161 (Claim Only)
							</div>

							<div className="contactInfo borderLeftBlue flex">
								<span
									style={{ marginRight: '.9rem', color: 'var(--mainblue)' }}
								>
									<i className="fa-solid fa-envelope"></i>
								</span>
								info@abb-insurance.com
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
