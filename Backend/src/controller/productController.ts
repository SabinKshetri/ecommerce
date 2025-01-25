import { Request, Response } from "express";
import Product from "../database/models/productModel";
import { AuthRequest } from "../middleware/authMiddleware";
import User from "../database/models/userModels";
import Category from "../database/models/categoryModel";

class ProductController {
  async addProduct(req: AuthRequest, res: Response): Promise<void> {
    const {
      productName,
      productDescription,
      productPrice,
      productTotalStockQty,
      categoryId,
    } = req.body;
    const userId = req.user?.id;
    let fileName;
    if (req.file) {
      fileName = req.file?.filename;
    } else {
      fileName =
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw0f6DD7zA-7sCgHhTjuE0CW&ust=1737625289849000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJifqeOEiYsDFQAAAAAdAAAAABAE";
    }
    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productTotalStockQty ||
      !categoryId
    ) {
      res.status(400).json({
        message: "Please Provide necessary Details of the product",
      });
      return;
    }
    const product = await Product.create({
      productName,
      productDescription,
      productPrice,
      productTotalStockQty,
      productImageUrl: fileName,
      userId: userId,
      categoryId: categoryId,
    });
    res.status(200).json({
      message: "Product Created Successfully ",
      data: product,
    });
  }
  async getAllProduct(req: Request, res: Response): Promise<void> {
    const data = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "email", "username"],
        },
        {
          model: Category,
          attributes: ["id", "categoryName"],
        },
      ],
    });
    res.status(200).json({
      message: "Product Fetched Successfully !!!",
      data,
    });
  }
  async getSingleProduct(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const singleData = await Product.findAll({
      where: {
        id: id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "email", "username"],
        },
        {
          model: Category,
          attributes: ["id", "categoryName"],
        },
      ],
    });
    if (singleData.length === 0) {
      res.status(404).json({
        message: "No product with that id",
      });
    } else {
      res.status(200).json({
        message: "Single product fetched successfully",
        data: singleData,
      });
    }
  }
  async deleteProduct(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data = await Product.findAll({
      where: {
        id: id,
      },
    });
    if (data.length > 0) {
      await Product.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "Product Deleted Successfully !!",
      });
    } else {
      res.status(404).json({
        message: "No product with this id",
      });
    }
  }
}
export default new ProductController();
