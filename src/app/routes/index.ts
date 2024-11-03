import { Router } from 'express';
import userRoutes from '../modules/user/user.route';
import blogRoutes from '../modules/blog/blog.route';
import experienceRoutes from '../modules/experience/experience.route';
import educationRoutes from '../modules/education/education.route';
import skillRoutes from '../modules/skill/skill.route';
import portfolioRoutes from '../modules/portfolio/portfolio.route';

const router = Router();

const routes = [
  {
    path: '/user',
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
  {
    path: '/portfolios',
    route: portfolioRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

const allRoutes = router;
export default allRoutes;
