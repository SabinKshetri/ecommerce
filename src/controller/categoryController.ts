import Category from "../database/models/categoryModel";
import { Request, Response } from "express";
class CategoryController {
  categoryData = [
    { categoryName: "Electronics" },
    { categoryName: "Groceries" },
    { categoryName: "Food/Beverage" },
    { categoryName: "Clothes" },
    { categoryName: "Trending" },
  ];
  async seedCategory(): Promise<void> {
    const datas = await Category.findAll();
    if (datas.length === 0) {
      const data = await Category.bulkCreate(this.categoryData);
      console.log("Categories seeded successfully !!");
    } else {
      console.log("Categories seeded already !!");
    }
  }
  async addCategory(req: Request, res: Response): Promise<void> {
    const { categoryName } = req.body;
    if (!categoryName) {
      res.status(400).json({
        message: "Please Provide Category",
      });
      return;
    }
    await Category.create({
      categoryName,
    });
    res.status(200).json({
      message: "Category Added Successfully !!",
    });
  }
  async getCategory(req: Request, res: Response): Promise<void> {
    const data = await Category.findAll();
    res.status(200).json({
      message: "Category Fetched",
      data,
    });
  }
  async deleteCategory(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data = await Category.findAll({
      where: {
        id: id,
      },
    });
    if (data.length === 0) {
      res.status(400).json({
        message: "No Category with this id",
      });
    } else {
      await Category.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "Category Deleted Successfully !!",
      });
    }
  }
  async updateCategory(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { categoryName } = req.body;
    await Category.update(
      { categoryName },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      message: "Category Updated Successfully !!",
    });
  }
}
export default new CategoryController();
