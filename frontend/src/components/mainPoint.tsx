interface MainPointProps {
	pointText: string;
}

export default function MainPoint({ pointText }: MainPointProps) {
	return (
		<div className="mainPoints">
			<div className="leftPoint">
				<h1 className="text-4xl">
					<b>{pointText}</b>
				</h1>
			</div>
		</div>
	);
}
