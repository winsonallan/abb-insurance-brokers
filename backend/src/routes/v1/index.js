import express from 'express';
import publicRoutes from '../publicRoute.js';
import adminRoutes from './adminRoutes.js';
import authRoutes from './authRoutes.js';
import beritaPostsRoutes from './beritaPostsRoutes.js';
import careerPostsRoutes from './careerPostsRoutes.js';
import careerRoutes from './careerRoutes.js';
import contactRoutes from './contactsRoutes.js';
import { authenticateToken } from './middleware/auth.js';
import miscImagesRoutes from './miscImagesRoutes.js';
import postImagesRoutes from './postImagesRoutes.js';
import teamRoutes from './teamRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use('/public', publicRoutes);
router.use('/admins', authenticateToken, adminRoutes);
router.use('/auth', authRoutes);
router.use('/news', beritaPostsRoutes);
router.use('/career-posts', careerPostsRoutes);
router.use('/careers', careerRoutes);
router.use('/contact', contactRoutes);
router.use('/misc-images', miscImagesRoutes);
router.use('/post-images', postImagesRoutes);
router.use('/team', teamRoutes);
router.use('/users', userRoutes);

export default router;
