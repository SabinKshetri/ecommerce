import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../types/productTypes";
import { Status } from "./authSlice";
import { AppDispatch, RootState } from "./store";
import API from "../http";

const initialState: ProductState = {
  product: [],
  status: Status.Loading,
  singleProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state: ProductState, action: PayloadAction<Product[]>) {
      state.product = action.payload;
    },
    setStatus(state: ProductState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setSingleProduct(state: ProductState, action: PayloadAction<Product>) {
      state.singleProduct = action.payload;
    },
  },
});
export const { setProduct, setStatus, setSingleProduct } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await API.get("admin/product");
      if (response.status == 200) {
        const { data } = response.data;
        dispatch(setStatus(Status.Success));
        dispatch(setProduct(data));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}

export function fetchByProductId(productId: string) {
  return async function fetchByProductIdThunk(
    dispatch: AppDispatch,
    getState: () => RootState
  ) {
    const state = getState();
    const existingProduct = state.product.product.find(
      (product) => product.id == productId
    );
    if (existingProduct) {
      dispatch(setSingleProduct(existingProduct));
      dispatch(setStatus(Status.Success));
    } else {
      dispatch(setStatus(Status.Loading));
      try {
        const response = await API.get(`admin/product/${productId}`);
        if (response.status == 200) {
          const { data } = response.data;
          dispatch(setStatus(Status.Success));
          dispatch(setSingleProduct(data));
        } else {
          dispatch(setStatus(Status.Error));
        }
      } catch (error) {
        dispatch(setStatus(Status.Error));
      }
    }
  };
}
