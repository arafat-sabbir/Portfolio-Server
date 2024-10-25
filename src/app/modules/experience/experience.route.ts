// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { experienceControllers } from './experience.controller';
import validateRequest from '../../middlewares/validateRequest';
import { experienceValidation } from './experience.validation';


// Initialize router
const router = Router();

router.post("/create-experience",validateRequest(experienceValidation.createExperienceSchema), experienceControllers.createExperience);

const experienceRoutes = router;
export default experienceRoutes;