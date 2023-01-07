import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

function globalErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      data: err?.data,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}

export { globalErrors };
