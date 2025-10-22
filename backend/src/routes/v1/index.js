import express from 'express';

import adminRoutes from './adminRoutes.js';
import beritaPostsRoutes from './beritaPostsRoutes.js';
import careerPostsRoutes from './careerPostsRoutes.js';
import careerRoutes from './careerRoutes.js';
import contactRoutes from './contactsRoutes.js';
import miscImagesRoutes from './miscImagesRoutes.js';
import postImagesRoutes from './postImagesRoutes.js';
import postTagsRoutes from './postTagsRoutes.js';
import tagRoutes from './tagRoutes.js';
import teamRoutes from './teamRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

router.use('/admins', adminRoutes);
router.use('/news', beritaPostsRoutes);
router.use('/career-posts', careerPostsRoutes);
router.use('/careers', careerRoutes);
router.use('/contact', contactRoutes);
router.use('/misc-images', miscImagesRoutes);
router.use('/post-images', postImagesRoutes);
router.use('/post-tags', postTagsRoutes);
router.use('/tags', tagRoutes);
router.use('/team', teamRoutes);
router.use('/users', userRoutes);

export default router;
