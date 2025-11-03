interface MainPointProps {
	pointText: string;
	pointClassName: string;
	center: boolean;
}

export default function SmallMainPoint({
	pointClassName = 'leftPoint',
	pointText,
	center = false,
}: MainPointProps) {
	return (
		<div className="mainPoints flex flex-col sm:justify-center">
			<div
				className={`${pointClassName} w-full text-center lg:text-left`}
				style={{
					marginBottom: '0',
					paddingBottom: '.5rem',
				}}
			>
				<h1
					className="text-2xl"
					style={center ? { textAlign: 'center' } : { textAlign: 'left' }}
				>
					<b>{pointText}</b>
				</h1>
			</div>
		</div>
	);
}
