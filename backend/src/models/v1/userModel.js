import pool from '../../config/db.js';

// READ Operations
export const getAllUsers = async () => {
	const [rows] = await pool.query('SELECT id, username, name FROM m_admins');

	return rows;
};

export const getUserByID = async (id) => {
	const [rows] = await pool.query(
		'SELECT id, username, name FROM m_admins WHERE id = ?',
		[id],
	);
	return rows[0];
};

// CREATE Operations
export const createUser = async (username, name, passwordHash) => {
	const [result] = await pool.query(
		'INSERT INTO m_admins(username, name, password_hash) VALUES (?. ?. ?)',
		[username, name, passwordHash],
	);

	return { id: result.insertId, username, name };
};

// UPDATE Operations
export const updateUser = async (id, username, name) => {
	const [result] = await pool.query(
		'UPDATE m_admins SET username = ?, name = ? WHERE id = ?',
		[username, name, id],
	);
	return result.affectedRows > 0;
};

// DELETE Operations
export const deleteUser = async (id) => {
	const [result] = await pool.query('DELETE FROM m_admins WHERE id = ?', [id]);
	return result.affectedRows > 0;
};
