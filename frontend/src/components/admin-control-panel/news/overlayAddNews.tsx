'use client';
import { type Dispatch, type SetStateAction, useState } from 'react';

interface overlayAddNewsProps {
	showAddArticle: boolean;
	stateFunction: Dispatch<SetStateAction<boolean>>;
}

export default function OverlayAddNews({
	showAddArticle,
	stateFunction,
}: overlayAddNewsProps) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function addNews(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setLoading(true);
		setError(null);

		try {
			const form = e.currentTarget;
			const formData = new FormData(form);

			// You can append extra fields if needed
			// formData.append("author", "admin");

			const res = await fetch('/api/news/add', {
				method: 'POST',
				body: formData,
				credentials: 'include', // sends cookies if needed
			});

			const data = await res.json();

			if (!res.ok || !data.success) {
				throw new Error(data.message || 'Failed to add article.');
			}

			alert('Article added successfully!');
			form.reset();
			stateFunction(false); // Close the overlay
		} catch (err: any) {
			console.error(err);
			setError(err.message || 'Something went wrong.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div
			className={`${
				showAddArticle ? 'absolute' : 'hidden'
			} w-full h-full flex justify-center`}
			style={{ alignItems: 'center' }}
		>
			<div
				className="w-1/2 h-1/3 bg-white m-auto p-8"
				style={{
					zIndex: 100,
					borderRadius: '.5rem',
					border: '2px solid var(--mainblue)',
				}}
			>
				<button
					style={{
						color: 'darkred',
					}}
					className="w-full text-right font-bold cursor-pointer"
					onClick={() => stateFunction(false)}
					type="button"
				>
					<span
						style={{ border: '2px solid darkred', borderRadius: '5px' }}
						className="px-2 py-1"
					>
						Cancel&nbsp;<i className="fa-solid fa-x"></i>
					</span>
				</button>

				<h1
					className="text-xl font-bold mb-8"
					style={{ color: 'var(--mainblue)' }}
				>
					Add New Article
				</h1>

				<form
					onSubmit={addNews}
					method="post"
					className="grid grid-cols-10 gap-y-4"
					id="addArticleForm"
				>
					<label
						htmlFor="title_en"
						className="font-bold col-span-3"
						style={{ color: 'var(--darkblue)' }}
					>
						Title (EN):
					</label>
					<input
						type="text"
						name="title_en"
						id="title_en"
						required
						style={{
							border: '2px solid var(--lightskyblue)',
							borderRadius: '5px',
						}}
						className="col-span-7 w-2/3"
					/>

					<label
						htmlFor="title_id"
						className="font-bold col-span-3"
						style={{ color: 'var(--darkblue)' }}
					>
						Title (ID):
					</label>
					<input
						type="text"
						name="title_id"
						id="title_id"
						required
						style={{
							border: '2px solid var(--lightskyblue)',
							borderRadius: '5px',
						}}
						className="col-span-7 w-2/3"
					/>

					{error && (
						<p className="col-span-10 text-red-600 font-semibold">{error}</p>
					)}

					<button
						type="submit"
						disabled={loading}
						style={{
							backgroundColor: 'var(--darkblue)',
							borderRadius: '5px',
							color: 'white',
							opacity: loading ? 0.6 : 1,
						}}
						className="font-bold cursor-pointer py-1 px-2 col-span-2 mt-2"
					>
						{loading ? 'Submitting...' : 'Submit'}
					</button>
				</form>
			</div>
		</div>
	);
}
