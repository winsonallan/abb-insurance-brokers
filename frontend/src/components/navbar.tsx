'use client';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import '../../public/support/css/components/navbar.css';

import { createElementNames } from '../../public/support/js/createElementNames.js';
import { apiURL } from '../../public/support/js/webState.js';
import DesktopNavbar from './navbar/desktopNavbar';
import MobileNavbar from './navbar/mobileNavbar';
import { navbarLinks, openLinks } from './navbar/navbarUtils.js';
import NavbarSpacing from './navbarSpacing';

export async function logout() {
	await fetch(`${apiURL}auth/logout`, {
		method: 'POST',
		credentials: 'include',
	});

	Cookies.remove('token');
	window.location.href = '/';
}

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [langMenuOpen, setLangMenuOpen] = useState(false);
	const [currentLang, setCurrentLang] = useState('EN');

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch(`${apiURL}auth/check`, {
					credentials: 'include', // send cookies!
				});
				const data = await res.json();
				setIsLoggedIn(data.authenticated);
			} catch {
				setIsLoggedIn(false);
			}
		};

		checkAuth();
	}, []);

	return (
		<>
			{/* --- Desktop Navbar --- */}
			<DesktopNavbar
				langMenuOpen={langMenuOpen}
				setLangMenuOpen={setLangMenuOpen}
				currentLang={currentLang}
				setCurrentLang={setCurrentLang}
				loggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
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
				<div className="flex flex-col xl:hidden fixed top-[107px] left-0 w-full bg-white border-b-2 border-[var(--whiteblue)] shadow-lg z-10">
					{/* Common navigation links */}
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

					{/* Conditional Menus */}
					{!isLoggedIn ? (
						// When NOT logged in
						<div className="flex flex-col items-center gap-2 pb-4">
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
					) : (
						// When logged in
						<>
							<button
								type="button"
								className="navLinks py-3 text-center border-t border-[var(--whiteblue)]"
								id="navLink__admin-tools"
								onClick={() => {
									openLinks(7);
									setMenuOpen(false);
								}}
							>
								Admin Tools
							</button>

							<div className="border-t border-[var(--whiteblue)] my-2"></div>

							<div className="flex justify-center items-center gap-4 pb-4">
								<button
									className="navLinks"
									id="navLink__logout"
									type="button"
									onClick={() => {
										logout();
										setIsLoggedIn(false);
										setMenuOpen(false);
									}}
								>
									Logout
								</button>
							</div>
						</>
					)}
				</div>
			)}

			<NavbarSpacing />
		</>
	);
}
