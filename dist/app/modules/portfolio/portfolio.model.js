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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Define an interface representing a Portfolio document
// Define the Portfolio schema
const PortfolioSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    technologiesUsed: {
        type: [String],
        required: [true, 'Technologies Used is required'],
    },
    features: {
        type: [String],
        required: [true, 'Features is required'],
    },
    livePreview: {
        type: String,
        trim: true,
    },
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required'],
        trim: true,
    },
    duration: {
        type: String,
        trim: true,
    },
    reviews: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Review',
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
    },
    currentlyWorking: {
        type: Boolean,
    },
}, { timestamps: true, versionKey: false });
// Create the Portfolio model
const PortfolioModel = mongoose_1.default.model('Portfolio', PortfolioSchema);
// Export the Portfolio model
exports.default = PortfolioModel;
