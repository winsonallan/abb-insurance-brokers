import express from 'express';
import * as Controller from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(Controller.getUsers).post(Controller.createUser);

router
	.route('/:id')
	.get(Controller.getUserByID)
	.put(Controller.updateUser)
	.delete(Controller.deleteUser);

export default router;
