// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { experienceControllers } from './experience.controller';
import validateRequest from '../../middlewares/validateRequest';
import { experienceValidation } from './experience.validation';
import AuthorizeRequest from '../../middlewares/auth';

// Initialize router
const router = Router();

router.post(
  '/',
  AuthorizeRequest(),
  validateRequest(experienceValidation.createExperienceSchema,true),
  experienceControllers.createExperience
);

router.get('/:id', experienceControllers.getSingleExperience);

router.get('/', experienceControllers.getAllExperience);

router.patch(
  '/:id',
  AuthorizeRequest(),
  validateRequest(experienceValidation.editExperienceSchema,true),
  experienceControllers.editExperience
);

router.delete('/:id', AuthorizeRequest(), experienceControllers.deleteExperience);

const experienceRoutes = router;
export default experienceRoutes;

