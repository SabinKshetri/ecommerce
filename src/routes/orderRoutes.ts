import express, { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import errorHandler from "../services/catchAsyncError";
import orderController from "../controller/orderController";
const router = Router();

router
  .route("/")
  .post(
    authMiddleware.isAuthenticated,
    errorHandler(orderController.createOrder)
  );

export default router;
