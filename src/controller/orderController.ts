import { AuthRequest } from "../middleware/authMiddleware";
import { Response } from "express";
import {
  KhaltiResponse,
  OrderData,
  OrderStatus,
  PaymentMethod,
  TransctionStatus,
  TransctionVerificationResponse,
} from "../types/orderTypes";
import Order from "../database/models/ordersModel";
import Payment from "../database/models/payment";
import OrderDetail from "../database/models/orderDetalsModel";
import axios from "axios";
import { or } from "sequelize";
import Product from "../database/models/productModel";

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
      !Array.isArray(items) ||
      items.length === 0
    ) {
      res.status(400).json({
        message: "Please Provide necessary data !!",
      });
      return;
    }

    const paymentData = await Payment.create({
      paymentMethod: paymentDetails.paymentMethod,
    });
    const orderData = await Order.create({
      phoneNumber,
      shippingAddress,
      totalAmount,
      userId,
      paymentId: paymentData.id,
    });
    for (var i = 0; i < items.length; i++) {
      await OrderDetail.create({
        quantity: items[i].quantity,
        productId: items[i].productId,
        orderId: orderData.id,
      });
    }
    if (paymentDetails.paymentMethod === PaymentMethod.Khalti) {
      //khalti integration api
      const data = {
        return_url: "http://localhost:3000/success",
        purchase_order_id: orderData.id,
        amount: totalAmount * 100,
        website_url: "http://localhost:3000/",
        purchase_order_name: "orderName" + orderData.id,
      };
      const response = await axios.post(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        data,
        {
          headers: {
            Authorization: "key 49eb6332232b4d10bb49cd67507007da",
          },
        }
      );
      const khaltiResponse: KhaltiResponse = response.data;
      paymentData.pidx = khaltiResponse.pidx;
      paymentData.save();
      res.status(200).json({
        message: "Order placed successfully !",
        url: khaltiResponse.payment_url,
      });
    } else {
      res.status(200).json({
        message: "Order placed successfully !!",
      });
    }
  }
  async verifyTransction(req: AuthRequest, res: Response): Promise<void> {
    const { pidx } = req.body;
    const userId = req.user?.id;
    if (!pidx) {
      res.status(400).json({
        message: "Please provide pidx",
      });
      return;
    }
    const response = await axios.post(
      "https://a.khalti.com/api/v2/epayment/lookup/",
      { pidx },
      {
        headers: {
          Authorization: "key 49eb6332232b4d10bb49cd67507007da",
        },
      }
    );
    console.log(response);

    const data: TransctionVerificationResponse = response.data;
    console.log(data);
    if (data.status == TransctionStatus.Completed) {
      await Payment.update(
        { paymentDtatus: "paid" },
        {
          where: {
            pidx: pidx,
          },
        }
      );
      res.status(200).json({
        message: "Payment Verified Successfully !!",
      });
    } else {
      res.status(200).json({
        message: "Payment not Verified !!",
      });
    }
  }
  //CustomerSide
  async fetchMyOrders(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const orders = await Order.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: Payment,
        },
      ],
    });
    if (orders.length > 0) {
      res.status(200).json({
        message: "Order fetched successfully !!",
        data: orders,
      });
    } else {
      res.status(400).json({
        message: "Failed to fetched",
        data: [],
      });
    }
  }
  async fetchOrderDetails(req: AuthRequest, res: Response): Promise<void> {
    const orderId = req.params.id;
    const orderDetails = await OrderDetail.findAll({
      where: {
        orderId,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    if (orderDetails.length > 0) {
      res.status(200).json({
        message: "OrderDetails fetched successfully !!",
        data: orderDetails,
      });
    } else {
      res.status(400).json({
        message: "no any orderdetails",
        data: [],
      });
    }
  }

  async cancelOrder(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const orderId = req.params.id;
    const order: any = await Order.findAll({
      where: {
        userId,
        id: orderId,
      },
    });
    if (order?.orderStatus === OrderStatus.Ontheway || OrderStatus.Prepration) {
      res.status(200).json({
        message:
          "You cannot Cancel order when it is in ontheway or preparation",
      });
      return;
    }
    await Order.update(
      { orderStatus: OrderStatus.Cancelled },
      {
        where: {
          id: orderId,
        },
      }
    );
    res.status(200).json({
      message: "Order Cancelled Successfully !!",
    });
  }
}

export default new OrderController();
