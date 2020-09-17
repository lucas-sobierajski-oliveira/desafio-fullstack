import { Router } from 'express';
import UserController from '../controllers/UsersController';;

const usersController = new UserController();
const router = Router();

router.post('/', usersController.create);

export default router;
