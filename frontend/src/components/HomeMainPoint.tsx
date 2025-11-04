'use client';
import { motion } from 'framer-motion';

interface MainPointProps {
	pointText: string;
	pointClassName?: string;
}

export default function MainPoint({
	pointText,
	pointClassName = 'whiteLeftPoint',
}: MainPointProps) {
	return (
		<motion.div
			className="mainPoints flex flex-col sm:justify-center mb-12"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			viewport={{ once: true }}
		>
			<div
				className={`${pointClassName} w-full text-center md:text-left relative overflow-hidden`}
			>
				<h1 className="text-4xl font-bold relative z-10">
					{pointText}
				</h1>
				<div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 via-transparent to-transparent rounded-r-lg"></div>
			</div>
		</motion.div>
	);
}
