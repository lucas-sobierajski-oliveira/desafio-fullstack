import "reflect-metadata";
import express, { Express, Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';
import '@shared/infra/typeorm';
import '@shared/container';
import routes from './routes';
import AppError from "@shared/errors/AppError";
import ValidationError from "@shared/errors/ValidationError";

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// Global Exception Handling: if the error is known is returned an friendly response
app.use((err: Error, request: Request, response: Response, _ : NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.status_code).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof ValidationError) {
    return response.status(err.status_code).json({
      status: 'Validation Error',
      messages: err.message,
    });
  }
  console.log(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, HOST, () => {
  console.log("-------------------Server is running on port 3333-------------------");
})
