import express from 'express';
import * as Controller from '../../controllers/v1/beritaPostsController.js';

const router = express.Router();

router.route('/').get(Controller.getBeritaPosts);
router.route('/random/:slug/:number').get(Controller.getRandomBeritaPosts);
router.route('/:slug').get(Controller.getBeritaPost);

export default router;
