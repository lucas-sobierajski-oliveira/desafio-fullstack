import { Router, Request, Response  } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/serssions.routes';

const router = Router();

router.use('/user', usersRouter);
router.use('/session', sessionsRouter);

export default router;
