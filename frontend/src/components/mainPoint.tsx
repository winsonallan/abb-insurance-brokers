interface MainPointProps {
	pointText: string;
	pointClassName: string;
}

export default function MainPoint({
	pointClassName = 'leftPoint',
	pointText,
}: MainPointProps) {
	return (
		<div className="mainPoints flex flex-col sm:justify-center">
			<div className={`${pointClassName} w-full text-center md:text-left`}>
				<h1 className="text-4xl">
					<b>{pointText}</b>
				</h1>
			</div>
		</div>
	);
}
