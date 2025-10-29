import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routesV1 from './routes/v1/index.js';

dotenv.config();

const app = express();
app.use(
	cors({
		origin: process.env.FRONTEND_BASE_URL,
		credentials: true,
	}),
);

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', routesV1);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
