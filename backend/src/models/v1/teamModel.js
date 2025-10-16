import pool from '../../config/db.js';

// READ
export const getAllTeamMembers = async () => {
	const [rows] = await pool.query('SELECT * FROM tr_team ORDER BY `order` ASC');

	return rows;
};

export const getAllSupervisors = async () => {
	const [rows] = await pool.query(
		'SELECT * FROM tr_team WHERE category=?',
		'supervisor',
	);
	return rows;
};

export const getAllExecutives = async () => {
	const [rows] = await pool.query(
		'SELECT * FROM tr_team WHERE category=?',
		'executive',
	);
	return rows;
};
