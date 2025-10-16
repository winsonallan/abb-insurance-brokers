import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { openLinks } from './navbarUtils.js';

interface MobileNavbarProps {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	langMenuOpen: boolean;
	setLangMenuOpen: Dispatch<SetStateAction<boolean>>;
	currentLang: string;
	setCurrentLang: Dispatch<SetStateAction<string>>;
}

export default function MobileNavbar({
	menuOpen,
	setMenuOpen,
	langMenuOpen,
	setLangMenuOpen,
	currentLang,
	setCurrentLang,
}: MobileNavbarProps) {
	return (
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
	);
}
