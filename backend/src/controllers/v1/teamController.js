import * as Model from '../../models/v1/teamModel.js';

// READ
export const getAllTeamMembers = async (req, res) => {
	try {
		const teamMembers = await Model.getAllTeamMembers();
		res.json({ success: true, data: teamMembers });
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ success: false, error: 'Failed to fetch team members' });
	}
};

export const getAllSupervisors = async (req, res) => {
	try {
		const teamMembers = await Model.getAllSupervisors();
		res.json({ success: true, data: teamMembers });
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ success: false, error: 'Failed to fetch team members' });
	}
};

export const getAllExecutives = async (req, res) => {
	try {
		const teamMembers = await Model.getAllExecutives();
		res.json({ success: true, data: teamMembers });
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ success: false, error: 'Failed to fetch team members' });
	}
};
