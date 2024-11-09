// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { workControllers } from './work.controller';
import validateRequest from '../../middlewares/validateRequest';
import { workValidation } from './work.validation';
import AuthorizeRequest from '../../middlewares/auth';
import uploadSinglePhoto from '../../utils/uploadSinglePhoto';

// Initialize router
const router = Router();

router.post(
  '/',
  uploadSinglePhoto(),
  validateRequest(workValidation.createWorkSchema),
  workControllers.createWork
);

router.get('/', workControllers.getAllWork);

router.get('/:id', workControllers.getSingleWork);

router.patch(
  '/:id',
  uploadSinglePhoto(),
  validateRequest(workValidation.editWorkSchema),
  workControllers.editWork
);

router.delete('/:id', AuthorizeRequest(), workControllers.deleteWork);

const workRoutes = router;
export default workRoutes;

