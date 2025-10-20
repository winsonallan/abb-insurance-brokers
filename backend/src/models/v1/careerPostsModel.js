import pool from '../../config/db.js';

// READ
export const getAllCareerPosts = async () => {
	const [rows] = await pool.query(
		`SELECT 
      m_career.position_name,
      m_department.department_name,
      tr_career_posts.location,
      tr_career_posts.employment_type,
      tr_career_posts.key_responsibility,
      tr_career_posts.requirements,
      tr_career_posts.is_active,
      m_career.apply_email
    FROM tr_career_posts 
    JOIN m_career 
      ON tr_career_posts.position_id = m_career.id 
    JOIN m_department 
      ON tr_career_posts.department_id = m_department.id`,
	);

	return rows;
};
