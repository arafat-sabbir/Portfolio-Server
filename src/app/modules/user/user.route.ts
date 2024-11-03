// Import Router from express
import { NextFunction, Request, Response, Router } from 'express';
import { userControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
import AuthorizeRequest from '../../middlewares/auth';
import { upload } from '../../utils/multer';
import convertFilePath from '../../utils/convertFilePath';

// Import controller from corresponding module

//Import validation from corresponding module

// Initialize router
const router = Router();

// Register A New User
router.post(
  '/register',
  validateRequest(userValidation.createUserSchema),
  userControllers.createUser
);

//Login User
router.post('/login', validateRequest(userValidation.loginUserSchema), userControllers.loginUser);

router.get('/me', AuthorizeRequest(), userControllers.getUser);

router.patch(
  '/update',
  AuthorizeRequest(),
  upload.single('photo'),
  convertFilePath,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, photo: req.file?.path };
    next();
  },
  validateRequest(userValidation.updateUserSchema),
  userControllers.updateUser
);

const userRoutes = router;
export default userRoutes;
