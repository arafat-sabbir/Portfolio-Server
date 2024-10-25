import { Router } from 'express';
import userRoutes from '../modules/user/user.route';
import blogRoutes from '../modules/blog/blog.route';
import experienceRoutes from '../modules/experience/experience.route';
import educationRoutes from '../modules/education/education.route';
import skillRoutes from '../modules/skill/skill.route';

const router = Router();

const routes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/blogs',
    route: blogRoutes,
  },
  {
    path: '/educations',
    route: educationRoutes,
  },
  {
    path: '/experiences',
    route: experienceRoutes,
  },
  {
    path: '/skills',
    route: skillRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

const allRoutes = router;
export default allRoutes;
