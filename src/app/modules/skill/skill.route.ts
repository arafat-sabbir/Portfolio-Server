// Import Router from express
// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { skillControllers } from './skill.controller';
import validateRequest from '../../middlewares/validateRequest';
import { skillValidation } from './skill.validation';
import AuthorizeRequest from '../../middlewares/auth';

// Initialize router
const router = Router();

router.post('/', validateRequest(skillValidation.createSkillSchema), skillControllers.createSkill);

router.get('/', skillControllers.getAllSkill);

router.patch(
  '/:id',
  AuthorizeRequest(),
  validateRequest(skillValidation.editSkillSchema),
  skillControllers.editSkill
);

router.delete('/:id', AuthorizeRequest(), skillControllers.deleteSkill);

router.get('/:id', skillControllers.getSingleSkill);

const skillRoutes = router;
export default skillRoutes;

