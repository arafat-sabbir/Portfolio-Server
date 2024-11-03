// Import Router from express
// Import Router from express
import { NextFunction, Request, Response, Router } from 'express';

// Import controller from corresponding module
import { portfolioControllers } from './portfolio.controller';
import { upload } from '../../utils/multer';
import convertFilePath from '../../utils/convertFilePath';

// Initialize router
const router = Router();

router.post(
  '',
  upload.single('photo'),
  convertFilePath,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, thumbnail: req.file?.path };
    next();
  },
  //   validateRequest(portfolioValidation.createPortfolioSchema),
  portfolioControllers.createPortfolio
);

router.get('', portfolioControllers.getAllPortfolio);

router.get('/:id', portfolioControllers.getSinglePortfolio);

router.delete('/:id', portfolioControllers.deletePortfolio);

router.patch(
  '/:id',
  upload.single('photo'),
  convertFilePath,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, thumbnail: req.file?.path };
    next();
  },
  //   validateRequest(portfolioValidation.editPortfolioSchema),
  portfolioControllers.updatePortfolio
);

const portfolioRoutes = router;
export default portfolioRoutes;

