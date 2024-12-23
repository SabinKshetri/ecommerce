import { AuthRequest } from "../middleware/authMiddleware";
import { Response } from "express";
import { OrderData, PaymentMethod } from "../types/orderTypes";
import Order from "../database/models/ordersModel";
import Payment from "../database/models/payment";
import OrderDetail from "../database/models/orderDetalsModel";

class OrderController {
  async createOrder(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const {
      phoneNumber,
      shippingAddress,
      totalAmount,
      paymentDetails,
      items,
    }: OrderData = req.body;
    if (
      !phoneNumber ||
      !shippingAddress ||
      !totalAmount ||
      !paymentDetails ||
      !paymentDetails.paymentMethod ||
      items.length == 0
    ) {
      res.status(400).json({
        message: "Please Provide necessary data !!",
      });
      return;
    }
    const orderData = await Order.create({
      phoneNumber,
      shippingAddress,
      totalAmount,
      userId,
    });
    await Payment.create({
      paymentMethod: paymentDetails.paymentMethod,
    });
    for (var i = 0; i < items.length; i++) {
      await OrderDetail.create({
        quantity: items[i].quantity,
        productId: items[0].productId,
        orderId: orderData.id,
      });
    }
    if (paymentDetails.paymentMethod === PaymentMethod.Khalti) {
      //khalti integration api
    } else {
      res.status(200).json({
        message: "Order placed successfully !!",
      });
    }
  }
}
