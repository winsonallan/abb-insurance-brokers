'use client';

import Image from 'next/image';
import { useState } from 'react';

import '../../public/support/css/components/navbar.css';
import { createElementNames } from '../../public/support/js/createElementNames.js';
import NavbarSpacing from './navbarSpacing';

const openLinks = (index: number): void => {
	if (index === 0) window.location.href = '/';
	if (index === 1) window.location.href = '/products';
	if (index === 2) window.location.href = '/contact-us';
	if (index === 3) window.location.href = '/careers';
	if (index === 4) window.location.href = '/news';
	if (index === 6) window.location.href = '/login';
};

const navbarLinks = [
	'Produk & Jasa Kami',

	'Hubungi Kami',
	'Karir',
	'Berita',
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [langMenuOpen, setLangMenuOpen] = useState(false);
	const [currentLang, setCurrentLang] = useState('EN');

	return (
		<>
			{/* --- Desktop Navbar --- */}
			<div className="hidden lg:flex">
				<div
					className="flex fixed top-0 left-0 w-full z-10 navbarDiv"
					style={{
						color: 'var(--foreground)',
						background: 'var(--white)',
						paddingTop: '1.25rem',
						paddingBottom: '1.25rem',
						paddingLeft: '3rem',
						paddingRight: '3rem',
						borderBottom: '3px solid var(--whiteblue)',
					}}
				>
					<Image
						src="/support/images/Logo ABB.png"
						alt="logo"
						style={{
							objectFit: 'cover',
							marginRight: '1rem',
							cursor: 'pointer',
						}}
						width={240}
						height={60}
						className="p-1"
						onClick={() => openLinks(0)}
					/>

					<nav
						style={{
							alignContent: 'center',
							fontSize: '1rem',
							justifyContent: 'space-between',
						}}
						className="flex w-full"
					>
						<div className="flex">
							{navbarLinks.map((label, i) => (
								<button
									key={label}
									className="navLinks"
									id={`navLink__${createElementNames(label).lowerCaseStriped}`}
									onClick={() => openLinks(i + 1)}
									type="button"
								>
									{label}
								</button>
							))}
						</div>

						{/* --- Right section: Language + Login --- */}
						<div className="flex relative items-center ml-4 mr-4">
							{/* Language Button */}
							<button
								onClick={() => setLangMenuOpen(!langMenuOpen)}
								className="navLang flex items-center gap-1 hover:opacity-80"
								type="button"
							>
								<i className="fa-solid fa-language"></i> <b>{currentLang}</b>
								<i
									className={`fa-solid fa-caret-${langMenuOpen ? 'up' : 'down'} ml-1`}
								></i>
							</button>

							{/* Language Dropdown */}
							{langMenuOpen && (
								<div className="absolute top-[4rem] right-[5rem] mt-2 bg-[var(--white)] border border-[var(--whiteblue)] rounded-md shadow-md w-24 text-center">
									{['EN', 'ID'].map((lang) => (
										<button
											key={lang}
											type="button"
											onClick={() => {
												setCurrentLang(lang);
												setLangMenuOpen(false);
												// Optional: call your changeLang(lang) function here
											}}
											className={`block w-full py-2 hover:bg-[var(--whiteblue)] ${
												currentLang === lang ? 'font-bold' : ''
											}`}
										>
											{lang}
										</button>
									))}
								</div>
							)}

							{/* Divider */}
							<div
								className="mx-3"
								style={{
									color: 'var(--foreground)',
								}}
							>
								&#124;
							</div>

							{/* Login Button */}
							<button
								className="navLinks"
								id={`navLink__login`}
								type="button"
								onClick={() => openLinks(6)}
							>
								Login
							</button>
						</div>
					</nav>
				</div>
			</div>

			{/* --- Mobile Navbar --- */}
			<div
				className="flex lg:hidden fixed top-0 left-0 w-full z-10 items-center justify-between px-6 py-4 h-[107px]"
				style={{
					color: 'var(--foreground)',
					background: 'var(--white)',
					borderBottom: '3px solid var(--whiteblue)',
				}}
			>
				{/* Logo */}
				<Image
					src="/support/images/Logo ABB.png"
					alt="logo"
					width={180}
					height={50}
					style={{ objectFit: 'cover', cursor: 'pointer' }}
					onClick={() => openLinks(0)}
				/>

				{/* Right Side: Hamburger + Language */}
				<div className="flex items-center relative">
					{/* Hamburger Button */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="text-[var(--foreground)] focus:outline-none"
						style={{ cursor: 'pointer' }}
						type="button"
					>
						<i className="fa-solid fa-bars text-2xl"></i>
					</button>

					<div className="text-[var(--foreground)] ml-4 mr-4">&#124;</div>

					{/* Language Button */}
					<button
						onClick={() => setLangMenuOpen(!langMenuOpen)}
						className="navLang flex items-center gap-1"
						type="button"
					>
						<i className="fa-solid fa-language"></i> <b>{currentLang}</b>
						<i
							className={`fa-solid fa-caret-${langMenuOpen ? 'up' : 'down'} ml-1`}
						></i>
					</button>

					{/* Language Dropdown */}
					{langMenuOpen && (
						<div className="absolute top-[100%] right-0 mt-2 bg-[var(--white)] border border-[var(--whiteblue)] rounded-md shadow-md w-24 text-center z-20">
							{['EN', 'ID'].map((lang) => (
								<button
									key={lang}
									type="button"
									onClick={() => {
										setCurrentLang(lang);
										setLangMenuOpen(false);
										// Optional: call your changeLang(lang) function here
									}}
									className={`block w-full py-2 hover:bg-[var(--whiteblue)] ${
										currentLang === lang ? 'font-bold' : ''
									}`}
								>
									{lang}
								</button>
							))}
						</div>
					)}
				</div>
			</div>

			{/* --- Dropdown Menu --- */}
			{menuOpen && (
				<div className="flex flex-col lg:hidden fixed top-[107px] left-0 w-full bg-[var(--white)] border-b-2 border-[var(--whiteblue)] shadow-lg z-10">
					{navbarLinks.map((label, i) => (
						<button
							type="button"
							key={label}
							className="navLinks py-3 text-center border-t border-[var(--whiteblue)]"
							id={`navLink__${createElementNames(label).lowerCaseStriped}`}
							onClick={() => {
								openLinks(i + 1);
								setMenuOpen(false);
							}}
						>
							{label}
						</button>
					))}

					{/* Divider */}
					<div className="border-t border-[var(--whiteblue)] my-2"></div>

					{/* Language & Login */}
					<div className="flex justify-center items-center gap-4 pb-4">
						<button
							className="navLinks"
							id="navLink__login"
							type="button"
							onClick={() => {
								openLinks(6);
								setMenuOpen(false);
							}}
						>
							Login
						</button>
					</div>
				</div>
			)}

			<NavbarSpacing />
		</>
	);
}
