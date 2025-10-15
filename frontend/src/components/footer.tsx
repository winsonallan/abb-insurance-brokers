import Image from 'next/image';
import { createElementNames } from '../../public/support/js/createElementNames.js';

export default function Footer() {
	return (
		<div
			className="p-12"
			style={{
				backgroundColor: 'var(--darkblue)',
				color: 'white',
				height: '120px',
			}}
		>
			© 2025 PT. ABB Insurance Brokers. All Rights Reserved.
		</div>
	);
}
