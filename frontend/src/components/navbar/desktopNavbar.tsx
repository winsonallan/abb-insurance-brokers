import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { createElementNames } from '../../../public/support/js/createElementNames.js';
import { apiURL } from '../../../public/support/js/webState.js';
import { logout } from '../navbar';
import { navbarLinks, openLinks } from './navbarUtils.js';

interface DesktopNavbarProps {
	langMenuOpen: boolean;
	setLangMenuOpen: Dispatch<SetStateAction<boolean>>;
	currentLang: string;
	setCurrentLang: Dispatch<SetStateAction<string>>;
}

export default function DesktopNavbar({
	langMenuOpen,
	setLangMenuOpen,
	currentLang,
	setCurrentLang,
}: DesktopNavbarProps) {
	return (
		<div className="hidden lg:flex">
			<div
				className="flex fixed top-0 left-0 w-full z-10 navbarDiv"
				style={{
					color: 'var(--foreground)',
					background: 'white',
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
							<div className="absolute top-[4rem] right-[5rem] mt-2 bg-white border border-[var(--whiteblue)] rounded-md shadow-md w-24 text-center">
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
						<button
							className="navLinks"
							id="navLink__login"
							type="button"
							onClick={logout}
						>
							Logout
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
}
