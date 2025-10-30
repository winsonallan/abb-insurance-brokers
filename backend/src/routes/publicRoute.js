import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

// ===== Multer config (already working) =====
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const { slug } = req.params;
		const dir = `public/images/news/${slug}`;

		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
		cb(null, dir);
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		const filename = `${Date.now()}${ext}`;
		cb(null, filename);
	},
});

const upload = multer({ storage });

// ===== Upload image =====
router.post('/upload/news/img/:slug', upload.single('image'), (req, res) => {
	if (!req.file)
		return res
			.status(400)
			.json({ success: false, message: 'No file uploaded' });

	res.json({
		success: true,
		filename: req.file.filename,
		path: `${req.file.filename}`,
	});
});

// ===== Delete image =====
router.delete('/upload/news/img/:slug/:filename', (req, res) => {
	try {
		const { slug, filename } = req.params;
		const folder = path.join(process.cwd(), 'public', 'images', 'news', slug);
		const filePath = path.join(folder, filename);

		if (!fs.existsSync(filePath)) {
			return res
				.status(404)
				.json({ success: false, message: 'File not found' });
		}

		fs.unlinkSync(filePath);

		// Get updated file list (optional, for frontend)
		const files = fs
			.readdirSync(folder)
			.filter((f) => f.match(/\.(jpe?g|png|webp|gif)$/i));

		return res.json({
			success: true,
			message: 'File deleted successfully',
			files: files.map((f) => `images/news/${slug}/${f}`),
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ success: false, message: 'Failed to delete file' });
	}
});

// ===== Replace image =====
const replaceStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		const { slug } = req.params;
		const dir = path.join(process.cwd(), 'public', 'images', 'news', slug);
		if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
		cb(null, dir);
	},
	filename: (req, file, cb) => {
		// Always use new timestamped filename to avoid browser cache issues
		const ext = path.extname(file.originalname);
		const filename = `${Date.now()}${ext}`;
		cb(null, filename);
	},
});

const replaceUpload = multer({ storage: replaceStorage });

router.put(
	'/upload/news/img/:slug/:filename',
	replaceUpload.single('image'),
	(req, res) => {
		try {
			const { slug, filename } = req.params;
			const folder = path.join(process.cwd(), 'public', 'images', 'news', slug);
			const oldFilePath = path.join(folder, filename);

			// Delete old file if exists
			if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);

			// Send back the new file info
			res.json({
				success: true,
				message: 'Image replaced successfully',
				filename: req.file.filename,
				path: req.file.filename,
			});
		} catch (err) {
			console.error(err);
			res
				.status(500)
				.json({ success: false, message: 'Failed to replace file' });
		}
	},
);

export default router;
