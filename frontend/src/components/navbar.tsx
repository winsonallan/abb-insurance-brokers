'use client';

import { useState } from 'react';

import '../../public/support/css/components/navbar.css';

import { createElementNames } from '../../public/support/js/createElementNames.js';
import DesktopNavbar from './navbar/desktopNavbar';
import MobileNavbar from './navbar/mobileNavbar';
import { navbarLinks, openLinks } from './navbar/navbarUtils.js';
import NavbarSpacing from './navbarSpacing';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [langMenuOpen, setLangMenuOpen] = useState(false);
	const [currentLang, setCurrentLang] = useState('EN');

	return (
		<>
			{/* --- Desktop Navbar --- */}
			<DesktopNavbar
				langMenuOpen={langMenuOpen}
				setLangMenuOpen={setLangMenuOpen}
				currentLang={currentLang}
				setCurrentLang={setCurrentLang}
			/>

			{/* --- Mobile Navbar --- */}
			<MobileNavbar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				langMenuOpen={langMenuOpen}
				setLangMenuOpen={setLangMenuOpen}
				currentLang={currentLang}
				setCurrentLang={setCurrentLang}
			/>

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
