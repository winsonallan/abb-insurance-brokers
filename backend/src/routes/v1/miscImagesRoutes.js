import express from 'express';
import * as Controller from '../../controllers/v1/miscImagesController.js';

const router = express.Router();

router.route('/carousels').get(Controller.getAllCarouselImages);

export default router;
