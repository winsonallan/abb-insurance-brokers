import jwt from 'jsonwebtoken';
import * as Model from '../../models/v1/authModel.js';

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		if (!username || !password)
			return res
				.status(400)
				.json({ message: 'Username and password required!' });

		const admin = await Model.login(username, password);

		if (!admin)
			return res.status(401).json({ message: 'Invalid Credentials!' });

		const token = jwt.sign(
			{ id: admin.id, username: admin.username, role: admin.role },
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRES_IN },
		);

		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'Strict',
			maxAge: 15 * 60 * 1000,
		});

		res.json({
			success: true,
			data: {
				id: admin.id,
				name: admin.name,
				username: admin.username,
				role: admin.role,
			},
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Login Failed' });
	}
};

export const logout = (req, res) => {
	res.clearCookie('token', {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'Strict',
	});

	res.json({ success: true, message: 'Logged Out' });
};
