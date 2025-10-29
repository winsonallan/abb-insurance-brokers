import pool from '../../config/db.js';

export const checkSlugAvailability = async (slug) => {
	const [rows] = await pool.query(
		`SELECT slug FROM tr_berita_posts WHERE slug LIKE ?`,
		[slug],
	);

	return rows.map((r) => r.slug);
};

export const getBeritaPost = async (slug) => {
	const [rows] = await pool.query(
		`SELECT 
			tr_berita_posts.id, 
			tr_berita_posts.title_en,
			tr_berita_posts.title_id, 
			tr_berita_posts.slug,
			tr_berita_posts.images,
			tr_berita_posts.content,
			tr_berita_posts.status,
			m_admins.name AS author,
			tr_berita_posts.created_at,
			tr_berita_posts.updated_at
		FROM 
			tr_berita_posts
		JOIN
			m_admins ON tr_berita_posts.author_id = m_admins.id 
		WHERE 
			tr_berita_posts.slug = ?`,
		[slug],
	);

	return rows[0];
};

export const getBeritaPosts = async () => {
	const [rows] = await pool.query(
		`SELECT 
			tr_berita_posts.id, 
			tr_berita_posts.title_en,
			tr_berita_posts.title_id,
			tr_berita_posts.slug,
			tr_berita_posts.images,
			tr_berita_posts.content,
			tr_berita_posts.status,
			m_admins.name AS author,
			tr_berita_posts.created_at,
			tr_berita_posts.updated_at 
		FROM 
			tr_berita_posts
		JOIN
			m_admins ON tr_berita_posts.author_id = m_admins.id 
		ORDER BY
			tr_berita_posts.created_at DESC`,
	);

	return rows;
};

export const getRandomBeritaPosts = async (number, slug) => {
	const [rows] = await pool.query(
		`
			SELECT
				tr_berita_posts.id, 
				tr_berita_posts.title_en,
				tr_berita_posts.title_id,
				tr_berita_posts.slug,
				tr_berita_posts.images,
				tr_berita_posts.content,
				tr_berita_posts.status,
				m_admins.name AS author,
				tr_berita_posts.created_at,
				tr_berita_posts.updated_at 
			FROM 
				tr_berita_posts
			JOIN
				m_admins ON tr_berita_posts.author_id = m_admins.id
			WHERE
				tr_berita_posts.slug != ?
			ORDER BY RAND()
			LIMIT ?
		`,
		[slug, parseInt(number)],
	);

	return rows;
};
