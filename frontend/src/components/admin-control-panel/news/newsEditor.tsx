'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';
import { apiURL } from '../../../../public/support/js/webState';
import EditorImage from './editorImage';
import OverlayAddImage from './overlayAddImage';

interface newsEditor {
	slug: string;
	title_en: string;
	title_id: string;
	content_en: string;
	content_id: string;
	imagesData: { cover: string; others: string[] };
	id: number;
}

const editorPlugins = [
	'advlist',
	'autolink',
	'lists',
	'link',
	'charmap',
	'anchor',
	'searchreplace',
	'visualblocks',
	'code',
	'fullscreen',
	'preview',
	'help',
	'wordcount',
];

const editorToolbar =
	'undo redo | blocks | ' +
	'bold italic underline' +
	'alignright alignjustify | bullist numlist outdent indent | ';

export default function NewsEditor({
	slug,
	title_en,
	title_id,
	content_en,
	content_id,
	imagesData,
	id,
}: newsEditor) {
	const editorRef = useRef<any>(null);
	const editorRefID = useRef<any>(null);
	const [showAddImagePopup, setAddImagePopup] = useState(false);
	const { cover, others } = imagesData;
	const [imageList, setImageList] = useState<string[]>([cover, ...others]);
	// inside NewsEditor:
	const [isReplaceMode, setIsReplaceMode] = useState(false);
	const [replaceTarget, setReplaceTarget] = useState<{
		index: number;
		filename: string;
	} | null>(null);

	// REPLACE image — now opens the crop popup
	const handleReplaceImage = (index: number, filenameOrUrl: string) => {
		const filename = filenameOrUrl.split('/').pop() || filenameOrUrl;
		setReplaceTarget({ index, filename });
		setIsReplaceMode(true);
		setAddImagePopup(true);
	};

	const moveImageUp = (index: number) => {
		if (index === 0) return; // already first
		setImageList((prev) => {
			const updated = [...prev];
			[updated[index - 1], updated[index]] = [
				updated[index],
				updated[index - 1],
			];
			return updated;
		});
	};

	const moveImageDown = (index: number) => {
		setImageList((prev) => {
			if (index === prev.length - 1) return prev; // already last
			const updated = [...prev];
			[updated[index], updated[index + 1]] = [
				updated[index + 1],
				updated[index],
			];
			return updated;
		});
	};

	// DELETE image
	const handleDeleteImage = async (index: number, filenameOrUrl: string) => {
		const filename = filenameOrUrl.split('/').pop() || filenameOrUrl;

		try {
			const res = await fetch(
				`${apiURL}public/upload/news/img/${slug}/${filename}`,
				{ method: 'DELETE' },
			);

			if (!res.ok) {
				const msg = await res.text();
				throw new Error(msg);
			}

			const data = await res.json();
			if (data.success) {
				setImageList((prev) => prev.filter((_, i) => i !== index));
			} else {
				alert(data.message || 'Failed to delete image');
			}
		} catch (err) {
			console.error(err);
			alert('Error deleting image');
		}
	};

	const handleFileSelectedForReplace = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = e.target.files?.[0];
		if (!file || !replaceTarget) return;

		const formData = new FormData();
		formData.append('image', file);

		const { filename, index } = replaceTarget;

		try {
			const res = await fetch(
				`${apiURL}public/upload/news/img/${slug}/${filename}`,
				{
					method: 'PUT',
					body: formData,
				},
			);

			const data = await res.json();
			if (data.success) {
				setImageList((prev) => {
					const updated = [...prev];
					updated[index] = data.path;
					return updated;
				});
			} else {
				alert(data.message || 'Failed to replace image');
			}
		} catch (err) {
			console.error(err);
			alert('Error replacing image');
		}
	};

	return (
		<div
			className="col-span-3"
			style={{
				border: '2px solid var(--lightskyblue)',
				borderRadius: '.5rem',
				background: 'white',
				color: 'var(--foreground)',
			}}
		>
			<OverlayAddImage
				slug={slug}
				showAddImage={showAddImagePopup}
				stateFunction={setAddImagePopup}
				replaceMode={isReplaceMode}
				replaceTarget={replaceTarget}
				onUploadSuccess={(newPath) => {
					if (isReplaceMode && replaceTarget) {
						setImageList((prev) => {
							const updated = [...prev];
							updated[replaceTarget.index] = newPath;
							return updated;
						});
						setIsReplaceMode(false);
						setReplaceTarget(null);
					} else {
						setImageList((prev) => [...prev, newPath]);
					}
				}}
			/>

			<form action="" method="post" className="w-full">
				<div className="p-4 w-full">
					{/* Title (EN) */}
					<div
						className="titleDiv pt-1 pb-2 flex"
						style={{
							borderBottom: '2px solid var(--lightskyblue)',
							alignItems: 'center',
						}}
					>
						<div className="font-bold">Title (EN):</div>
						<div className="ml-4 text-elipsis" style={{ whiteSpace: 'wrap' }}>
							<input
								type="text"
								name="title_en"
								id="title_en"
								className="p-2 mb-2 w-[600px]"
								style={{
									border: '2px solid var(--lightskyblue)',
									borderRadius: '5px',
								}}
								value={title_en}
							/>
						</div>
					</div>
					{/* Title (ID) */}
					<div
						className="titleDiv pt-4 pb-2 flex"
						style={{
							borderBottom: '2px solid var(--lightskyblue)',
							alignItems: 'center',
						}}
					>
						<div className="font-bold">Title (ID):</div>
						<div className="ml-4 text-elipsis" style={{ whiteSpace: 'wrap' }}>
							<input
								type="text"
								name="title_id"
								id="title_id"
								className="p-2 mb-2 w-[600px]"
								style={{
									border: '2px solid var(--lightskyblue)',
									borderRadius: '5px',
								}}
								value={title_id}
							/>
						</div>
					</div>
					{/* Images */}
					<div
						className="imagesDiv pt-2 pb-2 w-full"
						style={{ borderBottom: '2px solid var(--lightskyblue)' }}
					>
						<span className="font-bold">Images:</span>
						<br />
						<span style={{ fontSize: '.8rem', color: 'maroon' }}>
							*First image will be the cover.
						</span>
						<br />
						<button
							type="button"
							className="cursor-pointer mt-2 mb-2 p-3 font-bold"
							style={{
								backgroundColor: 'var(--superlightblue)',
								color: 'var(--foreground)',
								borderRadius: '.5rem',
							}}
							onClick={() => {
								setAddImagePopup(true);
							}}
						>
							Add New Image <i className="fa-solid fa-plus"></i>
						</button>
						<div className="flex gap-x-4 pt-1 pb-1 overflow-x-auto h-[380px] w-full">
							{imageList
								? imageList.map((src, i) => (
										<div
											key={`image_wrap_${i}`}
											className="flex flex-col items-center"
										>
											<EditorImage src={src} title={title_en} slug={slug} />
											<div className="flex gap-2 mt-2">
												<button
													type="button"
													className="p-1 bg-gray-200 rounded hover:bg-gray-300"
													onClick={() => moveImageUp(i)}
													disabled={i === 0}
												>
													↑
												</button>
												<button
													type="button"
													className="p-1 bg-gray-200 rounded hover:bg-gray-300"
													onClick={() => moveImageDown(i)}
													disabled={i === imageList.length - 1}
												>
													↓
												</button>
												<button
													type="button"
													className="p-1 bg-gray-200 rounded hover:bg-gray-300"
													onClick={() =>
														handleDeleteImage(i, src.split('/').pop()!)
													}
												>
													<i className="fa-solid fa-trash"></i>
												</button>
												<button
													type="button"
													className="p-1 bg-gray-200 rounded hover:bg-gray-300"
													onClick={() =>
														handleReplaceImage(i, src.split('/').pop()!)
													}
												>
													<i className="fa-solid fa-pencil"></i>
												</button>
											</div>
											<input type="hidden" name={`images_${i}`} value={src} />
										</div>
									))
								: ''}
						</div>
					</div>

					{/* Content (EN) */}
					<div
						className="contentDiv pt-2 pb-2"
						style={{ borderBottom: '2px solid var(--lightskyblue)' }}
					>
						<span className="font-bold">Content (EN):</span>
						<br />
						<br />
						<Editor
							tinymceScriptSrc="/tinymce/tinymce.min.js"
							licenseKey="gpl"
							onInit={(_evt, editor) => (editorRef.current = editor)}
							initialValue={content_en}
							init={{
								height: 500,
								menubar: false,
								plugins: editorPlugins,
								toolbar: editorToolbar,
								content_style:
									'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
							}}
						/>
						<br />
					</div>

					{/* Content (ID) */}
					<div
						className="contentDiv pt-2 pb-2"
						style={{ borderBottom: '2px solid var(--lightskyblue)' }}
					>
						<span className="font-bold">Content (ID):</span>
						<br />
						<br />
						<Editor
							tinymceScriptSrc="/tinymce/tinymce.min.js"
							licenseKey="gpl"
							onInit={(_evt, editor) => (editorRefID.current = editor)}
							initialValue={content_id}
							init={{
								height: 500,
								menubar: false,
								plugins: editorPlugins,
								toolbar: editorToolbar,
								content_style:
									'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
							}}
						/>
						<br />
					</div>
				</div>
				<div className="justify-center mb-3 flex gap-x-3">
					{/* Save Draft */}
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Save Draft
					</button>

					{/* Publish Draft */}
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Publish
					</button>

					{/* Update Draft */}
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Update
					</button>

					{/* Hide Article */}
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Hide
					</button>

					{/* Delete Article/Draft */}
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Delete
					</button>
				</div>
				<input type="hidden" name="article_id" value={id} />
			</form>
		</div>
	);
}
