import { NextFunction, Request, Response } from 'express';
import AuthorizeRequest from '../middlewares/auth';
import convertFilePath from './convertFilePath';
import { upload } from './multer';

/**
 * Middleware pipeline function to handle authorization, photo upload,
 * and file path conversion.
 */
const uploadSinglePhoto = () => [
  AuthorizeRequest(),
  upload.single('photo'),
  convertFilePath,
  (req: Request, res: Response, next: NextFunction) => {
    // Add the uploaded file path to the request body
    if (req.file) {
      req.body.photo = req.file.path;
    }
    next();
  },
];

export default uploadSinglePhoto;
