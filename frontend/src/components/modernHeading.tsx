'use client';
import { motion } from 'framer-motion';

export default function ModernHeading({
	title,
	accent = false,
	centered = false,
	light = false
}: {
	title: string;
	accent?: boolean;
	centered?: boolean;
	light?: boolean;
}) {
	return (
		<motion.h2
			className={`text-4xl md:text-5xl font-semibold mb-4 ${
				centered ? 'text-center mx-auto' : ''
			} ${light ? 'text-white' : 'text-[var(--darkblue)]'}`}
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			{title}
			{accent && (
				<motion.span
					className="block w-16 h-[3px] mt-4 mx-auto bg-gradient-to-r from-[#006dff] to-[#00a6ff] rounded-full"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				/>
			)}
		</motion.h2>
	);
}
