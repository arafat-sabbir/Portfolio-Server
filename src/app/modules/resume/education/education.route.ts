// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { educationControllers } from './education.controller';
import { educationValidation } from './education.validation';
import AuthorizeRequest from '../../../middlewares/auth';
import validateRequest from '../../../middlewares/validateRequest';

// Initialize router
const router = Router();

router.post(
  '/',
  AuthorizeRequest(),
  validateRequest(educationValidation.createEducationSchema, true),
  educationControllers.createEducation
);

router.get('/:id', educationControllers.getSingleEducation);

router.get('/', educationControllers.getAllEducation);

router.patch(
  '/:id',
  AuthorizeRequest(),
  validateRequest(educationValidation.editEducationSchema, true),
  educationControllers.editEducation
);

router.delete('/:id', AuthorizeRequest(), educationControllers.deleteEducation);

const educationRoutes = router;
export default educationRoutes;

