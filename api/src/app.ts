import express from 'express';
import 'express-async-errors';

import routes from './routes/index';
import errorMiddleware from './middleware/errorMiddleware';

import './database';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

export default app;
