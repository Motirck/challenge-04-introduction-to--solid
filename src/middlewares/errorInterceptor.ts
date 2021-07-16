import { Request, Response, NextFunction } from 'express';

import { ErrorHandler } from '../handlers/ErrorHandler';

export function errorInterceptor(
    err: ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction, // Next is required even if not used
): Response {
    if (err instanceof ErrorHandler) {
        const { message, name, description, statusCode } = err;

        return res.status(statusCode).json({ error: message, name, description });
    }

    return res.status(500).json({
        status: 'error',
        error: 'Internal Server Error',
    });
}
