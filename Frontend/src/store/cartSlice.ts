import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../types/cartTypes";
import { Status } from "./authSlice";
import { AppDispatch } from "./store";
import { AuthenticatedAPI } from "../http";

const initialState: CartState = {
  items: [],
  status: Status.Loading,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem(state: CartState, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    setStatus(state: CartState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});
export const { setItem, setStatus } = cartSlice.actions;
export default cartSlice.reducer;

export function addToCart(productId: string) {
  return async function addToCartThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.Loading));
    console.log(productId, "productid");

    try {
      const response = await AuthenticatedAPI.post("/customer/cart", {
        productId,
        quantity: 1,
      });
      if (response.status == 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setItem(response.data.data));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}

export function fetchCartItems() {
  return async function fetchCartItemsThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await AuthenticatedAPI.get("/customer/cart");
      if (response.status == 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setItem(response.data.data));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
