import express, { Router } from "express";
import authMiddleware, { Role } from "../middleware/authMiddleware";
import errorHandler from "../services/catchAsyncError";
import orderController from "../controller/orderController";
const router = Router();

router
  .route("/")
  .post(
    authMiddleware.isAuthenticated,
    errorHandler(orderController.createOrder)
  );
router
  .route("/verify")
  .post(
    authMiddleware.isAuthenticated,
    errorHandler(orderController.verifyTransction)
  );
router
  .route("/customer/")
  .get(
    authMiddleware.isAuthenticated,
    errorHandler(orderController.fetchMyOrders)
  );

router
  .route("/customer/:id")
  .patch(
    authMiddleware.isAuthenticated,
    authMiddleware.restrictTo(Role.Customer),
    errorHandler(orderController.cancelOrder)
  )
  .get(
    authMiddleware.isAuthenticated,
    errorHandler(orderController.fetchOrderDetails)
  );

export default router;
