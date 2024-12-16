import Cart from "../database/models/cartModel";
import { AuthRequest } from "../middleware/authMiddleware";
import { Response } from "express";

class cartController {
  async addToCart(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const { qauntity, productId } = req.body;
    if (!qauntity || !productId) {
      res.status(400).json({
        message: "Please Provide Quantity & ProductId",
      });
    }
    //check if the product already exist in the cart or not
    let cartItem = await Cart.findOne({
      where: {
        productId,
        userId,
      },
    });
    if (cartItem) {
      cartItem.quantity += qauntity;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({
        qauntity,
        userId,
        productId,
      });
    }
    res.status(200).json({
      message: "Product added to cart",
      data: cartItem,
    });
  }
}
export default new cartController();
