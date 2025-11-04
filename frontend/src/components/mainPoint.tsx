'use client';

import { motion } from 'framer-motion';

interface MainPointProps {
	pointText: string;
}

export default function MainPoint({ pointText }: MainPointProps) {
	return (
		<div className="relative mb-12 md:mb-16">
			<motion.h2
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="text-3xl md:text-4xl font-bold text-[var(--darkblue)] tracking-tight"
			>
				{pointText}
			</motion.h2>
			<motion.div initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="mt-3 h-[2px] w-48 md:w-48 bg-gradient-to-r from-[var(--mainblue)] via-[var(--oceanblue)] to-[var(--superlightoceanblue)] rounded-full" />
		</div>
	);
}
