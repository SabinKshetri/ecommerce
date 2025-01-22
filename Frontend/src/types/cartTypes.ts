import { Status } from "../store/authSlice";
import { Product } from "./productTypes";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  status: Status;
}
