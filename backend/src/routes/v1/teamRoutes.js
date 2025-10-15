import express from 'express';
import * as Controller from '../../controllers/v1/teamController.js';

const router = express.Router();

router.route('/').get(Controller.getAllTeamMembers);
router.route('/executives').get(Controller.getAllExecutives);
router.route('/supervisors').get(Controller.getAllSupervisors);

export default router;
