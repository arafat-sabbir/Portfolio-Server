"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/seeders/seed.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
const client_model_1 = __importDefault(require("../modules/about/client/client.model"));
const work_model_1 = __importDefault(require("../modules/about/work/work.model"));
const blog_model_1 = __importDefault(require("../modules/blog/blog.model"));
const portfolio_model_1 = __importDefault(require("../modules/portfolio/portfolio.model"));
const education_model_1 = __importDefault(require("../modules/resume/education/education.model"));
const experience_model_1 = __importDefault(require("../modules/resume/experience/experience.model"));
const skill_model_1 = __importDefault(require("../modules/resume/skill/skill.model"));
const social_model_1 = __importDefault(require("../modules/user/social/social.model"));
const seed_1 = require("../data/seed");
const user_model_1 = __importDefault(require("../modules/user/user/user.model"));
const models = [
    { model: client_model_1.default, data: seed_1.clientData },
    { model: work_model_1.default, data: seed_1.workData },
    { model: blog_model_1.default, data: seed_1.blogData },
    { model: portfolio_model_1.default, data: seed_1.portfolioData },
    { model: education_model_1.default, data: seed_1.educationData },
    { model: experience_model_1.default, data: seed_1.experienceData },
    { model: skill_model_1.default, data: seed_1.skillData },
    { model: social_model_1.default, data: seed_1.socialData },
    { model: user_model_1.default, data: seed_1.userData },
];
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Checking and seeding default data...');
        for (const { model, data } of models) {
            const dataExists = yield model.countDocuments();
            if (dataExists === 0) {
                yield model.insertMany(data);
                console.log(`${model.modelName} seeded`);
            }
        }
    }
    catch (error) {
        console.error('Error during database seeding:', error);
    }
});
exports.seedDatabase = seedDatabase;
