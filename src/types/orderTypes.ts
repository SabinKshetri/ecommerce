export interface OrderData {
  phoneNumber: string;
  shippingAddress: string;
  totalAmount: number;
  paymentDetails: {
    paymentMethod: PaymentMethod;
    paymentStatus?: PaymentStatus;
    pidx?: string;
  };
  items: OrderDetails[];
}

export interface OrderDetails {
  quantity: number;
  productId: string;
}

export enum PaymentMethod {
  Cod = "COD",
  Khalti = "Khalti",
}

enum PaymentStatus {
  Paid = "paid",
  Unpaid = "unpaid",
}

export interface KhaltiResponse {
  pidx: string;
  payment_url: string;
  expires_at: Date | string;
  expires_in: number;
  user_fee: number;
}

export interface TransctionVerificationResponse {
  pidx: string;
  total_amount: number;
  status: TransctionStatus;
  transction_id: string;
  fee: number;
  refunded: boolean;
}

export enum TransctionStatus {
  Completed = "Completed",
  Pending = "Pending",
  Initiated = "Initiated",
  Refunded = "Refunded",
}

export enum OrderStatus {
  Pending = "pending",
  Cancelled = "cancelled",
  Ontheway = "ontheway",
  Delivered = "delivered",
  Prepration = "prepration",
}
