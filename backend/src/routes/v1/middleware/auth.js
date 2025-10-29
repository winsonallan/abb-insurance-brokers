import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export function authenticateToken(req, res, next) {
	const token = req.cookies.token;

	if (!token) return res.sendStatus(401); // no token

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.sendStatus(403); // invalid/expired token
		req.user = user;
		next();
	});
}
