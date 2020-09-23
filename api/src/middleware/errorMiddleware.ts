import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';

export default function errorMiddleware(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: err.statusCode, message: err.message });
  }

  console.log(err);

  return response
    .status(500)
    .json({ status: 'Error', message: 'Erro interno' });
}
