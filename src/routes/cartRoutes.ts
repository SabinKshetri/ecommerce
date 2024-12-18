import express, { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import cartController from "../controller/addToCartController";
import errorHandler from "../services/catchAsyncError";
const router: Router = express.Router();

router
  .route("/")
  .post(authMiddleware.isAuthenticated, errorHandler(cartController.addToCart))
  .get(
    authMiddleware.isAuthenticated,
    errorHandler(cartController.getCartItem)
  );
router
  .route("/:productId")
  .patch(authMiddleware.isAuthenticated, cartController.updateCartItem)
  .delete(authMiddleware.isAuthenticated, cartController.deleteMyCartItem);

export default router;
