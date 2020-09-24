import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRoutes = Router();

usersRoutes.post('/', UsersController.create);

usersRoutes.get('/', UsersController.showAll);

usersRoutes.get('/:id', UsersController.showOne);

export default usersRoutes;
