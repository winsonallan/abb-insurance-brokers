'use client';
import Image from 'next/image';
import '../../public/support/css/components/navbar.css';
import { createElementNames } from '../../public/support/js/createElementNames.js';
import NavbarSpacing from './navbarSpacing';

const openLinks = (index: number): void => {
	if (index === 0) window.location.href = '/';
	if (index === 1) window.location.href = '/products';
	if (index === 2) window.location.href = '/our-team';
	if (index === 3) window.location.href = '/about-us';
	if (index === 4) window.location.href = '/contact-us';
	if (index === 5) window.location.href = '/careers';
	if (index === 6) window.location.href = '/news';
};

const navbarLinks = [
	'Produk Kami',
	'Tim Kami',
	'Tentang Kami',
	'Hubungi Kami',
	'Karir',
	'Berita',
];

export default function Navbar() {
	return (
		<>
			<div
				className="flex fixed top-0 left-0 w-full z-10 navbarDiv"
				style={{
					color: 'var(--foreground)',
					background: 'var(--lightgradient)',
					paddingTop: '1.25rem',
					paddingBottom: '1.25rem',
					paddingLeft: '3rem',
					paddingRight: '3rem',
					borderBottom: '1px solid var(--lightskyblue)',
				}}
			>
				<Image
					src="/support/images/Logo ABB.png"
					alt="logo"
					style={{ objectFit: 'cover', marginRight: '1rem', cursor: 'pointer' }}
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
					<div
						className="flex"
						style={{
							justifyContent: 'flex-end',
							marginLeft: '1.1rem',
							marginRight: '1.1rem',
						}}
					>
						<p className="navLang" style={{ alignContent: 'center' }}>
							<i className="fa-solid fa-language"></i> <b>EN</b>
						</p>
						<div
							style={{
								marginLeft: '1rem',
								marginRight: '1rem',
								color: 'var(--foreground)',
								width: '1px',
								alignContent: 'center',
							}}
						>
							&#124;
						</div>
						<button
							style={{ alignContent: 'center' }}
							className="navLinks"
							id={`navLink__login`}
							type="button"
							onClick={() => openLinks(8)}
						>
							Login
						</button>
					</div>
				</nav>
			</div>
			<NavbarSpacing />
		</>
	);
}
