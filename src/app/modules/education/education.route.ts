// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { educationControllers } from './education.controller';
import validateRequest from '../../middlewares/validateRequest';
import { educationValidation } from './education.validation';


// Initialize router
const router = Router();

router.post("/create-education",validateRequest(educationValidation.createEducationSchema), educationControllers.createEducation);

const educationRoutes = router;
export default educationRoutes;