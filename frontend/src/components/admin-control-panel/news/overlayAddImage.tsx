'use client';

import {
	type Dispatch,
	type SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, { type Crop, type PixelCrop } from 'react-image-crop';
import { apiURL } from '../../../../public/support/js/webState.js';

interface overlayAddImageProps {
	showAddImage: boolean;
	stateFunction: Dispatch<SetStateAction<boolean>>;
	slug: string;
	onUploadSuccess?: (path: string) => void;
	replaceMode?: boolean;
	replaceTarget?: { index: number; filename: string } | null;
}

export default function OverlayAddImage({
	showAddImage,
	stateFunction,
	slug,
	onUploadSuccess,
	replaceMode,
	replaceTarget,
}: overlayAddImageProps) {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [crop, setCrop] = useState<Crop>({ aspect: 4 / 3 });
	const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setSelectedFile(file);
		setPreviewUrl(URL.createObjectURL(file));
		e.target.value = '';
	};

	const getCroppedImage = async (): Promise<Blob | null> => {
		if (!imgRef.current || !completedCrop) return null;
		const canvas = document.createElement('canvas');
		const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
		const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
		canvas.width = completedCrop.width;
		canvas.height = completedCrop.height;
		const ctx = canvas.getContext('2d');
		if (!ctx) return null;

		ctx.drawImage(
			imgRef.current,
			completedCrop.x * scaleX,
			completedCrop.y * scaleY,
			completedCrop.width * scaleX,
			completedCrop.height * scaleY,
			0,
			0,
			completedCrop.width,
			completedCrop.height,
		);

		return new Promise((resolve) => {
			canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 1);
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const croppedBlob = await getCroppedImage();
			if (!croppedBlob) throw new Error('Cropping failed');

			const file = new File([croppedBlob], 'cropped.jpeg', {
				type: 'image/jpeg',
			});
			const formData = new FormData();
			formData.append('image', file);

			// decide endpoint
			const url =
				replaceMode && replaceTarget
					? `${apiURL}public/upload/news/img/${slug}/${replaceTarget.filename}`
					: `${apiURL}public/upload/news/img/${slug}`;
			const method = replaceMode ? 'PUT' : 'POST';

			const res = await fetch(url, {
				method,
				body: formData,
				credentials: 'include',
			});
			const data = await res.json();

			if (data.success) {
				onUploadSuccess?.(data.path);
				stateFunction(false);
			} else {
				throw new Error(data.message || 'Upload failed');
			}
		} catch (err: any) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		return () => {
			if (previewUrl) URL.revokeObjectURL(previewUrl);
		};
	}, [previewUrl]);

	return (
		<div
			className={`${
				showAddImage ? 'absolute' : 'hidden'
			} w-full h-[700px] flex justify-center`}
			style={{ alignItems: 'center', left: '50px', top: '300px' }}
		>
			<div
				className="w-1/2 bg-white p-8"
				style={{
					zIndex: 101,
					borderRadius: '.5rem',
					border: '2px solid var(--mainblue)',
				}}
			>
				<button
					style={{
						color: 'darkred',
					}}
					className="w-full text-right font-bold cursor-pointer"
					onClick={() => {
						stateFunction(false);
						setPreviewUrl(null);
						setSelectedFile(null);

						const input = document.getElementById(
							'upload_img',
						) as HTMLInputElement;
						if (input) input.value = '';
					}}
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
					{replaceMode ? 'Replace Image' : 'Add New Image'}
				</h1>

				<form
					method="post"
					className="grid grid-cols-10 gap-y-4"
					id="addImageForm"
				>
					<label
						htmlFor="upload_file"
						className="font-bold col-span-3"
						style={{ color: 'var(--darkblue)' }}
					>
						Upload File:
					</label>
					<input
						type="file"
						accept="image/*"
						name="upload_file"
						id="upload_img"
						required
						onChange={handleFileChange}
						className="col-span-7 w-2/3 px-2 py-1 border-2 border-[var(--lightskyblue)] rounded hidden"
					/>

					<label
						htmlFor="upload_img"
						className="col-span-7"
						style={{ color: 'var(--linkblue)' }}
					>
						Click here to upload... <i className="fa-solid fa-upload"></i>
					</label>

					{previewUrl && (
						<div className="col-span-10 h-full">
							<ReactCrop
								crop={crop}
								onChange={(c) => setCrop(c)}
								onComplete={(c) => setCompletedCrop(c)}
								aspect={4 / 3}
							>
								<img ref={imgRef} src={previewUrl} alt="Preview" />
							</ReactCrop>
						</div>
					)}

					{error && (
						<p className="col-span-10 text-red-600 font-semibold">{error}</p>
					)}

					<button
						type="submit"
						disabled={loading}
						className="font-bold cursor-pointer py-1 px-2 col-span-2 mt-2 bg-[var(--darkblue)] text-white rounded"
						onClick={handleSubmit}
					>
						{loading ? 'Submitting...' : 'Submit'}
					</button>
				</form>
			</div>
		</div>
	);
}
