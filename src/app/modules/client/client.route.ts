// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { clientControllers } from './client.controller';
import validateRequest from '../../middlewares/validateRequest';
import { clientValidation } from './client.validation';
import uploadSinglePhoto from '../../utils/uploadSinglePhoto';
import AuthorizeRequest from '../../middlewares/auth';



// Initialize router
const router = Router();

router.post(
  '/',
  uploadSinglePhoto(),
  validateRequest(clientValidation.createClientSchema),
  clientControllers.createClient
);

router.get('/', clientControllers.getAllClient);

router.get('/:id', clientControllers.getSingleClient);

router.patch(
  '/:id',
  uploadSinglePhoto(),
  validateRequest(clientValidation.createClientSchema),
  clientControllers.updateClient
);

router.delete('/:id', AuthorizeRequest(), clientControllers.deleteClient);

const clientRoutes = router;

export default clientRoutes;

