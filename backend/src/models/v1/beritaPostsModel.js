import pool from '../../config/db.js';

export const checkSlugAvailability = async (slug) => {
	const [rows] = await pool.query(
		`SELECT slug FROM tr_berita_posts WHERE slug LIKE ?`,
		[slug],
	);

	return rows.map((r) => r.slug);
};
