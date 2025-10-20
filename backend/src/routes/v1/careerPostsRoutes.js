import express from 'express';
import * as Controller from '../../controllers/v1/careerPostsController.js';

const router = express.Router();

router.route('/').get(Controller.getCareerPosts);

export default router;
