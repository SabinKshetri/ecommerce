import express, { Router } from "express";
import authMiddleware, { Role } from "../middleware/authMiddleware";
import categoryController from "../controller/categoryController";

const router: Router = express.Router();
router
  .route("/category")
  .post(
    authMiddleware.isAuthenticated,
    authMiddleware.restrictTo(Role.Admin),
    categoryController.addCategory
  )
  .get(categoryController.getCategory);
router
  .route("/category/:id")
  .delete(
    authMiddleware.isAuthenticated,
    authMiddleware.restrictTo(Role.Admin),
    categoryController.deleteCategory
  )
  .patch(
    authMiddleware.isAuthenticated,
    authMiddleware.restrictTo(Role.Admin),
    categoryController.updateCategory
  );

export default router;
