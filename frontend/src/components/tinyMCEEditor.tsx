'use client';
import { Editor } from '@tinymce/tinymce-react';
import type React from 'react';

export default function TinyMCEEditor({ ref }: { ref: React.Reference }) {
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

	return (
		<Editor
			tinymceScriptSrc="/tinymce/tinymce.min.js"
			licenseKey="gpl"
			onInit={(_evt, editor) => (ref.current = editor)}
			init={{
				height: 500,
				menubar: false,
				plugins: editorPlugins,
				toolbar: editorToolbar,
				content_style:
					'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
			}}
		/>
	);
}
