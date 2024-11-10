import express from 'express';
import { aboutController } from './about.controller';

const router = express.Router();

router.get('/', aboutController.getAllAboutContent);


export const aboutRoutes = router;