import express from 'express';
import { createUser,getUsers } from '../Controllers/userController.js';

const router = express.Router();

router.post('/createnewprofile', createUser);
router.get('/getprofiles', getUsers);

export default router;
