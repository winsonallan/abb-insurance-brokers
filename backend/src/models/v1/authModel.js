import pool from '../../config/db.js';
import { verifyPassword } from '../../utils/hash.js';

export const login = async (username, password) => {
	const [rows] = await pool.execute(
		'SELECT * FROM m_admins WHERE username = ? LIMIT 1',
		[username],
	);

	const admin = rows[0];
	if (!admin) return null;

	const valid = await verifyPassword(admin.password_hash, password);
	if (!valid) return null;

	return admin;
};
