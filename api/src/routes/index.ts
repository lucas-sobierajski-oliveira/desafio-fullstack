import { Router } from 'express';

import usersRoutes from './users.routes';

const routes = Router();

routes.use('/usuarios', usersRoutes);

export default routes;
