// MiniHighlight.tsx
type MiniHighlightProps = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

export default function MiniHighlight({
	icon,
	title,
	description,
}: MiniHighlightProps) {
	return (
		<div
			className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-(color:--lightoceanblue) border"
			style={{ borderColor: 'var(--lightoceanblue)' }}
		>
			<div className="text-4xl mb-3">{icon}</div>
			<h4
				className="font-semibold text-lg mb-2"
				style={{ color: 'var(--mainblue)' }}
			>
				{title}
			</h4>
			<p className="text-gray-600 text-sm">{description}</p>
		</div>
	);
}
