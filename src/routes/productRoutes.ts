import express, { Router } from "express";
import authMiddleware, { Role } from "../middleware/authMiddleware";
import { multer, storage } from "../middleware/multerConfig";
import productController from "../controller/productController";
const upload = multer({ storage: storage });

const router: Router = express.Router();
router
  .route("/")
  .post(
    authMiddleware.isAuthenticated,
    authMiddleware.restrictTo(Role.Admin),
    upload.single("image"),
    productController.addProduct
  )
  .get(productController.getAllProduct);
router
  .route("/:id")
  .get(productController.getSingleProduct)
  .delete(
    authMiddleware.isAuthenticated,
    authMiddleware.restrictTo(Role.Admin),
    productController.deleteProduct
  );

export default router;
