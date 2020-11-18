import { NextFunction, Request, Response } from 'express';

class CustomError extends Error {
    public statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }
}
const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({
        error: {
            statusCode: err.statusCode,
            message: err.message,
        },
    });
};
export {
    CustomError,
    errorHandler,
};
