// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { workControllers } from './work.controller';
import validateRequest from '../../middlewares/validateRequest';
import { workValidation } from './work.validation';


// Initialize router
const router = Router();

router.post("/}",validateRequest(workValidation.createWorkSchema), workControllers.createWork);


router.get("/",workControllers.getAllWork);


router.get("/",workControllers.getSingleWork);

const workRoutes = router;
export default workRoutes;