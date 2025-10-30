import pool from '../../config/db.js';

// READ
export const getAllMiscImages = async () => {
	const [rows] = await pool.query(
		`
			SELECT 
				id, 
				image_path, 
				caption_en, 
				caption_id, 
				description_en, 
				description_id, 
				content_type, 
				link_url, 
				display_order 
			FROM r_misc_images`,
	);

	return rows;
};

export const getAllCarouselImages = async () => {
	const [rows] = await pool.query(
		`
			SELECT 
				id, 
				image_path, 
				caption_en, 
				caption_id, 
				description_en, 
				description_id, 
				content_type, 
				link_url, 
				display_order 
			FROM r_misc_images 
			WHERE content_type='carousel' 
			ORDER BY display_order ASC
		`,
	);

	return rows;
};
