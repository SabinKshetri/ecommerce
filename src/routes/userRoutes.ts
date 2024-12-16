import express, { Router } from "express";
import AuthController from "../controller/userController";
import errorHandler from "../services/catchAsyncError";

const router = express.Router();

router.route("/register").post(errorHandler(AuthController.registerUser));
router.route("/login").post(errorHandler(AuthController.loginUser));

export default router;
