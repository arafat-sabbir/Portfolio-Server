// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { workControllers } from './work.controller';
import { workValidation } from './work.validation';
import uploadSinglePhoto from '../../../utils/uploadSinglePhoto';
import validateRequest from '../../../middlewares/validateRequest';
import AuthorizeRequest from '../../../middlewares/auth';
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

