interface CountProp {
	count: number;
}

export default function NoJob({ count }: CountProp) {
	return (
		<>
			{Number(count) === 0 ? (
				<>
					<hr className="mt-4 mb-4" style={{ color: 'var(--darkblue)' }} />
					<h1
						className="mt-20 mb-20 text-center font-bold text-2xl"
						style={{ color: 'var(--darkblue)' }}
					>
						No Openings Currently...
					</h1>
				</>
			) : null}
		</>
	);
}
