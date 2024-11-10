import express from 'express';
import { resumeController } from './resume.controller';

const router = express.Router();

router.get('/', resumeController.getAllResumeContent);

export const resumeRoutes = router;
