"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const path_1 = __importDefault(require("path"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const nodemailer = __importStar(require("nodemailer"));
const app = (0, express_1.default)();
// Nodemailer transporter configuration
exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
// Middleware setup
const formatDate = (date) => {
    const options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric', // Include seconds
        hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};
// Middleware to log requests and responses
const requestLogger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const query = JSON.stringify(req.query, null, 2); // Log query parameters
    const params = JSON.stringify(req.params, null, 2); // Log route parameters
    const body = JSON.stringify(req.body, null, 2); // Log request body
    const formattedDate = formatDate(new Date());
    console.log('------------------------');
    console.log(`Api :- \x1b[0m\x1b[34m${method}\x1b[0m \x1b[32m${url}\x1b[0m \x1b[36m[${formattedDate}]\x1b[0m`);
    console.log('Query:', query); // Log the query
    console.log('Params:', params); // Log the params
    console.log('Body:', body); // Log the body
    console.log('------------------------');
    next();
};
// Middleware setup
app.use((0, cors_1.default)({
    origin: ['https://portfolio.finaltry-innovations.site'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(requestLogger);
// Serve static files from the public directory
const publicDirPath = path_1.default.join(__dirname, '..', 'public');
app.use(express_1.default.static(publicDirPath));
// Use routes
app.use('/api/v1', routes_1.default);
// Test route
const test = (req, res) => {
    res.send('Hello NewBie!');
};
app.get('/', test);
// Global error handler
app.use(globalErrorHandler_1.default);
// Handle 404 - Not Found
app.all('*', (req, res) => {
    res.status(404).json({ success: false, message: `Route Is Not Found ${req.url}` });
});
exports.default = app;
