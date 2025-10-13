import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT NOW() AS current_time');
		res.json({ success: true, time: rows[0].current_time });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ success: false, error: 'Database connection failed' });
	}
});

export default router;
