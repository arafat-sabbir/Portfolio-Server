// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { educationControllers } from './education.controller';
import validateRequest from '../../middlewares/validateRequest';
import { educationValidation } from './education.validation';
import AuthorizeRequest from '../../middlewares/auth';

// Initialize router
const router = Router();

router.post(
  '/',
  AuthorizeRequest(),
  validateRequest(educationValidation.createEducationSchema),
  educationControllers.createEducation
);

router.get('/:id', educationControllers.getSingleEducation);

router.get('/', educationControllers.getAllEducation);

router.patch(
  '/:id',
  AuthorizeRequest(),
  validateRequest(educationValidation.editEducationSchema),
  educationControllers.editEducation
);

router.delete('/:id', AuthorizeRequest(), educationControllers.deleteEducation);

const educationRoutes = router;
export default educationRoutes;

