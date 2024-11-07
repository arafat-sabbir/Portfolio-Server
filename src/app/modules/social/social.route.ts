// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { socialControllers } from './social.controller';
import validateRequest from '../../middlewares/validateRequest';
import { socialValidation } from './social.validation';

// Initialize router
const router = Router();

router.post(
  '/',
  validateRequest(socialValidation.createSocialSchema),
  socialControllers.createSocial
);

router.get('/', socialControllers.getAllSocial);

router.get('/', socialControllers.getSingleSocial);

router.patch('/', validateRequest(socialValidation.editSocialValidationSchema), socialControllers.editSocial);

const socialRoutes = router;
export default socialRoutes;
