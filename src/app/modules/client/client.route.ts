// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { clientControllers } from './client.controller';
import validateRequest from '../../middlewares/validateRequest';
import { clientValidation } from './client.validation';


// Initialize router
const router = Router();

router.post("/}",validateRequest(clientValidation.createClientSchema), clientControllers.createClient);


router.get("/",clientControllers.getAllClient);


router.get("/",clientControllers.getSingleClient);

const clientRoutes = router;
export default clientRoutes;