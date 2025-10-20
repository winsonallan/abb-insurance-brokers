import * as Model from '../../models/v1/careerPostsModel.js';

export const getCareerPosts = async (req, res) => {
	try {
		const careers = await Model.getAllCareerPosts();
		res.json({ success: true, data: careers });
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ success: false, error: 'Failed to fetch career posts' });
	}
};

// CREATE Operations
export const createCareerPosts = async (req, res) => {
	try {
		const {
			position_id,
			department_id,
			location,
			employment_type,
			key_responsibilities,
			requirements,
		} = req.body;

		if (
			!position_id ||
			!department_id ||
			!location ||
			!employment_type ||
			!key_responsibilities ||
			!requirements
		)
			return res.status(400).json({ success: false, error: 'Data Missing' });

		const newJob = await Model.createCareerPost(
			position_id,
			department_id,
			location,
			employment_type,
			key_responsibilities,
			requirements,
		);

		res.status(201).json({ success: true, data: newJob });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ success: false, error: 'Failed to create new job posting' });
	}
};
