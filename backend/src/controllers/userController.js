import * as Model from '../models/userModel.js';

// READ Operations
export const getUsers = async (req, res) => {
	try {
		const users = await Model.getAllUsers();
		res.json({ success: true, data: users });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Failed to fetch users' });
	}
};

export const getUserByID = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await Model.getUserByID(id);

		if (!user)
			return res.status(404).json({ success: false, error: 'User not found!' });

		res.json({ success: true, data: user });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Failed to fetch user' });
	}
};

// CREATE Operations
export const createUser = async (req, res) => {
	try {
		const { username, name, password } = req.body;

		if (!username || !password)
			return res
				.status(400)
				.json({ success: false, error: 'Username and password required' });

		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = await Model.createUser(username, name || '', passwordHash);

		res.status(201).json({ success: true, data: newUser });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, error: 'Failed to create user' });
	}
};

// UPDATE Operations
export const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { username, name } = req.body;

		const success = await Model.updateUser(id, username, name);
		if (!success)
			return res
				.status(404)
				.json({ success: false, error: 'User not found or not updated' });

		res.json({ success: true, message: 'User updated successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, error: 'Failed to update user' });
	}
};

// DELETE Operations
export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const success = await Model.deleteUser(id);

		if (!success)
			return res
				.status(404)
				.json({ success: false, error: 'User not found or already deleted' });

		res.json({ success: true, message: 'User deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, error: 'Failed to delete user' });
	}
};
