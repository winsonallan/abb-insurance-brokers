import jwt from 'jsonwebtoken';
import * as Model from '../../models/v1/authModel.js';

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		if (!username || !password)
			return res.status(400).json({
				authenticated: false,
				message: 'Username and password required!',
			});

		const admin = await Model.login(username, password);

		if (!admin)
			return res
				.status(401)
				.json({ authenticated: false, message: 'Invalid Credentials!' });

		const token = jwt.sign(
			{ id: admin.id, username: admin.username, role: admin.role },
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRES_IN },
		);

		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'Strict',
			maxAge: 4 * 60 * 60 * 1000,
		});

		res.json({
			authenticated: true,
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

	res.json({ success: true, authenticated: false, message: 'Logged Out' });
};

export const checkLogin = (req, res) => {
	const token = req.cookies.token;
	if (!token) return res.json({ authenticated: false });

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const timeLeft = decoded.exp * 1000 - Date.now();

		if (timeLeft < 30 * 60 * 1000) {
			const newToken = jwt.sign(
				{ id: decoded.id, username: decoded.username, role: decoded.role },
				process.env.JWT_SECRET,
				{ expiresIn: '4h' },
			);

			res.cookie('token', newToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
				maxAge: 4 * 60 * 60 * 1000,
			});
		}

		res.json({ authenticated: true, user: decoded });
	} catch (error) {
		res.json({ authenticated: false, message: error });
	}
};
