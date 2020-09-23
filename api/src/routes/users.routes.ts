import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRoutes = Router();

usersRoutes.post('/', UsersController.create);

export default usersRoutes;
