// Import Router from express
// Import Router from express
import { NextFunction, Request, Response, Router } from 'express';

// Import controller from corresponding module
import { skillControllers } from './skill.controller';
import { skillValidation } from './skill.validation';
import AuthorizeRequest from '../../../middlewares/auth';
import { upload } from '../../../utils/multer';
import convertFilePath from '../../../utils/convertFilePath';
import validateRequest from '../../../middlewares/validateRequest';

// Initialize router
const router = Router();

router.post(
  '/',
  AuthorizeRequest(),
  upload.single('photo'),
  convertFilePath,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, photo: req.file?.path };
    next();
  },
  validateRequest(skillValidation.createSkillSchema),
  skillControllers.createSkill
);

router.get('/', skillControllers.getAllSkill);

router.patch(
  '/:id',
  upload.single('photo'),
  convertFilePath,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, photo: req.file?.path };
    next();
  },
  AuthorizeRequest(),
  validateRequest(skillValidation.editSkillSchema),
  skillControllers.editSkill
);

router.delete('/:id', AuthorizeRequest(), skillControllers.deleteSkill);

router.get('/:id', skillControllers.getSingleSkill);

const skillRoutes = router;
export default skillRoutes;
