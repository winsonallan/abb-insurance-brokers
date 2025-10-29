'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

import EditorImage from './editorImage';

interface imagesData {
	img_url: string;
}

interface newsEditor {
	title_en: string;
	title_id: string;
	content_en: string;
	content_id: string;
	imagesData: imagesData[];
}

export default function NewsEditor({
	title_en,
	title_id,
	content_en,
	content_id,
	imagesData,
}: newsEditor) {
	const editorRef = useRef(null);
	const editorRefID = useRef(null);

	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}

		if (editorRefID.current) {
			console.log(editorRefID.current.getContent());
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
						>
							Add New Image
						</button>
						<div className="flex gap-x-4 pt-1 pb-1 overflow-x-auto h-[380px] w-full">
							<EditorImage src="1.jpeg" title={title_en} />
							<EditorImage src="2.jpeg" title={title_en} />
							<EditorImage src="3.jpg" title={title_en} />
							<EditorImage src="1.jpeg" title={title_en} />
							<EditorImage src="2.jpeg" title={title_en} />
							<EditorImage src="3.jpg" title={title_en} />
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
								plugins: [
									'advlist',
									'autolink',
									'lists',
									'link',
									'image',
									'charmap',
									'anchor',
									'searchreplace',
									'visualblocks',
									'code',
									'fullscreen',
									'insertdatetime',
									'media',
									'table',
									'preview',
									'help',
									'wordcount',
								],
								toolbar:
									'undo redo | blocks | ' +
									'bold italic underline' +
									'alignright alignjustify | bullist numlist outdent indent | ',
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
								plugins: [
									'advlist',
									'autolink',
									'lists',
									'link',
									'image',
									'charmap',
									'anchor',
									'searchreplace',
									'visualblocks',
									'code',
									'fullscreen',
									'insertdatetime',
									'media',
									'table',
									'preview',
									'help',
									'wordcount',
								],
								toolbar:
									'undo redo | blocks | ' +
									'bold italic underline' +
									'alignright alignjustify | bullist numlist outdent indent | ',
								content_style:
									'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
							}}
						/>
						<br />
					</div>
				</div>
				<div className="justify-center mb-3 flex gap-x-3">
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
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Pubish
					</button>
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
			</form>
		</div>
	);
}
