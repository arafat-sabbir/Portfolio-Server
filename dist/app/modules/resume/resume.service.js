"use strict";
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
exports.resumeServices = void 0;
const education_model_1 = __importDefault(require("./education/education.model"));
const experience_model_1 = __importDefault(require("./experience/experience.model"));
const skill_model_1 = __importDefault(require("./skill/skill.model"));
const getResumeContent = () => __awaiter(void 0, void 0, void 0, function* () {
    const skills = (yield skill_model_1.default.find()) || [];
    const educations = (yield education_model_1.default.find()) || [];
    const experiences = (yield experience_model_1.default.find()) || [];
    return { skills, educations, experiences };
});
exports.resumeServices = {
    getResumeContent,
};