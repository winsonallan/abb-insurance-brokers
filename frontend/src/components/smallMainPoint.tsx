import type { CSSProperties } from 'react';

interface MainPointProps {
	pointText: string;
	pointClassName: string;
	center: boolean;
	color: CSSProperties | undefined;
}

export default function SmallMainPoint({
	pointClassName = 'leftPoint',
	pointText,
	center = false,
	color = 'var(--mainblue)',
}: MainPointProps) {
	return (
		<div className="mainPoints flex flex-col sm:justify-center">
			<div
				className={`${pointClassName} w-full text-center lg:text-left`}
				style={{
					marginBottom: '0',
					paddingBottom: '.5rem',
					outline: 0,
				}}
			>
				<h1
					className="text-2xl"
					style={{ color: color, textAlign: center ? 'center' : 'left' }}
				>
					<b>{pointText}</b>
				</h1>
			</div>
		</div>
	);
}
