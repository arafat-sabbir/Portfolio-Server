import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AdminModel from '../modules/admin/admin.model';

/**
 * Middleware to authorize requests.
 * Checks if the request has a valid authorization token.
 * If not, it throws an unauthorized error.
 */

const AuthorizeRequest = (...roles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Get the authorization token from the request headers
    const token = req.headers.authorization?.split(' ')[1];
    // If no token is provided, throw an unauthorized error
    if (!token) {
      throw new AppError(401, 'Unauthorized Access');
    }
    try {
      const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
      req.user = decoded;
      const { id, role, iat } = decoded;
      if (roles.length > 0 && !roles.includes(decoded?.role)) {
        throw new AppError(401, 'Unauthorized Access2');
      }
      const admin = await AdminModel.findById(id);
      if (!admin) {
        throw new Error('Admin not found');
      }
    } catch (error: any) {
      throw new AppError(401, 'Unauthorized Access3');
    }
    next();
  });
};

export default AuthorizeRequest;
