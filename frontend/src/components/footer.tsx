import Image from 'next/image';
import { createElementNames } from '../../public/support/js/createElementNames.js';

export default function Footer() {
	return (
		<div
			className="p-12"
			style={{
				background: 'var(--darkergradient)',
				color: 'white',
				height: '120px',
				borderTop: '3px solid var(--whiteblue)',
			}}
		>
			© 2025 PT. ABB Insurance Brokers. All Rights Reserved.
		</div>
	);
}
