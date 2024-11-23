// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { categoriesControllers } from './categories.controller';
import validateRequest from '../../middlewares/validateRequest';
import { categoriesValidation } from './categories.validation';


// Initialize router
const router = Router();

router.post("/",validateRequest(categoriesValidation.createCategoriesSchema), categoriesControllers.createCategories);


router.get("/",categoriesControllers.getAllCategories);


router.get("/:id",categoriesControllers.getSingleCategories);

const categoriesRoutes = router;
export default categoriesRoutes;