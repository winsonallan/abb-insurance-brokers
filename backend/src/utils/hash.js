import argon2 from 'argon2';

export async function hashPassword(password) {
	return await argon2.hash(password, {
		type: argon2.argon2id,
		memoryCost: 2 ** 16,
		timeCost: 5,
		parallelism: 1,
	});
}

export async function verifyPassword(hash, password) {
	return await argon2.verify(hash, password);
}
