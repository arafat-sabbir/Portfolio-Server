import { Router } from 'express';
import userRoutes from '../modules/user/user/user.route';
import blogRoutes from '../modules/blog/blog.route';
import educationRoutes from '../modules/resume/education/education.route';
import experienceRoutes from '../modules/resume/experience/experience.route';
import skillRoutes from '../modules/resume/skill/skill.route';
import portfolioRoutes from '../modules/portfolio/portfolio.route';
import socialRoutes from '../modules/user/social/social.route';
import clientRoutes from '../modules/about/client/client.route';
import workRoutes from '../modules/about/work/work.route';
import { resumeRoutes } from '../modules/resume/resume.route';
import { aboutRoutes } from '../modules/about/about.route';
import adminRoutes from '../modules/admin/admin.route';

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
  {
    path: '/socials',
    route: socialRoutes,
  },
  {
    path: '/clients',
    route: clientRoutes,
  },
  {
    path: '/works',
    route: workRoutes,
  },
  {
    path: '/resumes',
    route: resumeRoutes,
  },
  {
    path: '/about',
    route: aboutRoutes,
  },
  {
    path: '/admin',
    route: adminRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

const allRoutes = router;
export default allRoutes;
