import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  generate2FASecretController,
  verify2FAController,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/2fa/generate", authMiddleware, generate2FASecretController);

router.post("/2fa/verify", authMiddleware, verify2FAController);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.get("/me", authMiddleware, getCurrentUser);

export default router;
