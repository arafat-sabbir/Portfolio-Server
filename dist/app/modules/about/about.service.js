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
exports.aboutServices = void 0;
const user_model_1 = __importDefault(require("../user/user/user.model"));
const client_model_1 = __importDefault(require("./client/client.model"));
const work_model_1 = __importDefault(require("./work/work.model"));
const getAboutContent = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = (yield user_model_1.default.findOne());
    const clients = yield client_model_1.default.find();
    const works = yield work_model_1.default.find();
    return { bio: (user === null || user === void 0 ? void 0 : user.bio) || '', clients, works };
});
exports.aboutServices = {
    getAboutContent,
};
