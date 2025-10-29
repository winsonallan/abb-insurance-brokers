import express from 'express';
import * as Controller from '../../controllers/v1/authController.js';

const router = express.Router();

router.route('/login').post(Controller.login);
router.route('/logout').post(Controller.logout);
router.route('/check').get(Controller.checkLogin);

export default router;
