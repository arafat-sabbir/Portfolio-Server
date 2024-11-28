"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("../modules/user/user/user.route"));
const blog_route_1 = __importDefault(require("../modules/blog/blog.route"));
const education_route_1 = __importDefault(require("../modules/resume/education/education.route"));
const experience_route_1 = __importDefault(require("../modules/resume/experience/experience.route"));
const skill_route_1 = __importDefault(require("../modules/resume/skill/skill.route"));
const portfolio_route_1 = __importDefault(require("../modules/portfolio/portfolio.route"));
const social_route_1 = __importDefault(require("../modules/user/social/social.route"));
const client_route_1 = __importDefault(require("../modules/about/client/client.route"));
const work_route_1 = __importDefault(require("../modules/about/work/work.route"));
const resume_route_1 = require("../modules/resume/resume.route");
const about_route_1 = require("../modules/about/about.route");
const admin_route_1 = __importDefault(require("../modules/admin/admin.route"));
const categories_route_1 = __importDefault(require("../modules/categories/categories.route"));
const router = (0, express_1.Router)();
const routes = [
    {
        path: '/user',
        route: user_route_1.default,
    },
    {
        path: '/blogs',
        route: blog_route_1.default,
    },
    {
        path: '/educations',
        route: education_route_1.default,
    },
    {
        path: '/experiences',
        route: experience_route_1.default,
    },
    {
        path: '/skills',
        route: skill_route_1.default,
    },
    {
        path: '/portfolios',
        route: portfolio_route_1.default,
    },
    {
        path: '/socials',
        route: social_route_1.default,
    },
    {
        path: '/clients',
        route: client_route_1.default,
    },
    {
        path: '/works',
        route: work_route_1.default,
    },
    {
        path: '/resumes',
        route: resume_route_1.resumeRoutes,
    },
    {
        path: '/about',
        route: about_route_1.aboutRoutes,
    },
    {
        path: '/admin',
        route: admin_route_1.default,
    },
    {
        path: '/categories',
        route: categories_route_1.default,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
const allRoutes = router;
exports.default = allRoutes;
