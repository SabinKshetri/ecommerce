import Cart from "../database/models/cartModel";
import Product from "../database/models/productModel";
import { AuthRequest } from "../middleware/authMiddleware";
import { Response } from "express";

class cartController {
  async addToCart(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    console.log(req.body);
    const { quantity, productId } = req.body;
    if (!quantity || !productId) {
      res.status(404).json({
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
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({
        quantity,
        userId,
        productId,
      });
    }
    const product = await Product.findByPk(productId);
    res.status(200).json({
      message: "Product added to cart",
      data: {
        ...cartItem.toJSON(),
        product: product?.toJSON(),
      },
    });
  }
  async getCartItem(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const cartItems = await Cart.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    if (cartItems.length === 0) {
      res.status(404).json({
        message: "No Items in this cart",
      });
    } else {
      res.status(200).json({
        message: "Fetched cart items successfully !!",
        data: cartItems,
      });
    }
  }
  async deleteMyCartItem(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const { productId } = req.params;

    //check whether above productid exist or not
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(400).json({
        message: "No product with this id",
      });
      return;
    }
    //delete that product from user cart
    await Cart.destroy({
      where: {
        userId,
        productId,
      },
    });
    res.status(200).json({
      message: "Items deleted successfully !",
    });
  }
  async updateCartItem(req: AuthRequest, res: Response): Promise<void> {
    const { productId } = req.params;
    const userId = req.user?.id;
    const { quantity } = req.body;
    if (!quantity) {
      res.status(400).json({
        message: "please provide quantity",
      });
      return;
    }
    const cartData: any = await Cart.findOne({
      where: {
        userId,
        productId,
      },
    });
    cartData.quantity = quantity;
    await cartData.save();
    res.status(200).json({
      message: "Cart item updated ",
    });
  }
}
export default new cartController();
