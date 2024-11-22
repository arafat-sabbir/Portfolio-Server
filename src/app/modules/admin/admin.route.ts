// Import Router from express
import { Router } from 'express';

// Import controller from corresponding module
import { adminControllers } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { adminValidation } from './admin.validation';

// Initialize router
const router = Router();

router.post(
  '/register',
  validateRequest(adminValidation.createAdminSchema),
  adminControllers.createAdmin
);

//Login User
router.post(
  '/login',
  validateRequest(adminValidation.createAdminSchema),
  adminControllers.loginAdmin
);

router.patch(
  '/verify-opt',
  validateRequest(adminValidation.verifyOtpSchema),
  adminControllers.verifyOtp
);

router.patch(
  '/send-forgot-email',
  validateRequest(adminValidation.forgotPasswordEmailSchema),
  adminControllers.sendForgotPasswordEmail
);

router.patch(
  '/forgot-password',
  validateRequest(adminValidation.forgotPasswordSchema),
  adminControllers.forgotPassword
);

router.patch(
  '/verify-forgot-otp',
  validateRequest(adminValidation.verifyForgotOtp),
  adminControllers.verifyForgotPassword
);

router.get('/me', adminControllers.getAdmin);

const adminRoutes = router;
export default adminRoutes;

