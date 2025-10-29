import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { hashPassword } from '../src/utils/hash.js';

dotenv.config();

const connection = await mysql.createConnection({
	host: 'localhost',
	user: 'abb_admin',
	password: 'admin123',
	database: 'abb_insurance_brokers',
});

const passwordHash = await hashPassword(
	'@BB_!nsur4ncE_Br0ker5---Herd1_S@nt0750',
);

await connection.execute(
	`
    INSERT INTO m_admins (
      name, 
      username, 
      password_hash, 
      role
    )
    VALUES (?, ?, ?, ?)
  `,
	['Herdi Santoso', 'abb_herdi', passwordHash, 'superadmin'],
);

console.log(`Admin Created Successfully`);
connection.end();
