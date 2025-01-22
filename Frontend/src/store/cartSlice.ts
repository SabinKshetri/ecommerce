import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../types/cartTypes";
import { Status } from "./authSlice";
import { AppDispatch } from "./store";

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

function addToCart(productId) {
  return async function addToCartThunk(dispatch: AppDispatch) {
    try {
      console.log("to be continued");
    } catch (error) {
      console.log(error);
    }
  };
}
