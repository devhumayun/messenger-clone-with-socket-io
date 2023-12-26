import express from "express";
import {
  login,
  logout,
  register,
  loggedInUser,
  makeHashPass,
  accountActivationByOTP,
  accountActivationByLink,
  resentAccountActivation,
  resetPassword,
  resetPasswordAction,
  profilePhotoChange
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/verifyToken.js";
import { profilePhotoUpload } from "../utils/multer.js";

const router = express.Router();

// create route
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/hash").post(makeHashPass);
router.route("/register").post(register);
router.route("/activation-by-otp/:token").post(accountActivationByOTP);
router.route("/activation-by-link/:token").post(accountActivationByLink);
router.route("/resent-activation/:auth").get(resentAccountActivation);
router.route("/reset-password").post(resetPassword);
router.route("/reset-password-action/:token").post(resetPasswordAction);
router.route("/profile-photo-upload/:id").post(profilePhotoUpload, profilePhotoChange);

router.get("/me", tokenVerify, loggedInUser);

// export default router
export default router;
