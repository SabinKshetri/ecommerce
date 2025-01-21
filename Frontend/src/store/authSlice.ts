import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import API from "../http";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export enum Status {
  Loading = "loading",
  Success = "success",
  Error = "error",
  Null = "",
}

interface LoginData {
  email: string;
  password: string;
}

interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}

interface AuthState {
  user: User;
  status: string;
}

const initialState: AuthState = {
  user: {} as User,
  status: Status.Null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state: AuthState, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setStatus(state: AuthState, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    resetStatus(state: AuthState) {
      state.status = Status.Loading;
    },
    setToken(state: AuthState, action: PayloadAction<string>) {
      state.user.token = action.payload;
    },
  },
});
export const { setUser, setStatus, resetStatus, setToken } = authSlice.actions;
export default authSlice.reducer;

export function register(data: RegisterData) {
  return async function registerThunk(dispatch: any) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await API.post("register", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.Success));
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}

export function login(data: LoginData) {
  return async function loginThunk(dispatch: any) {
    dispatch(setStatus(Status.Loading));
    try {
      const response = await API.post("login", data);
      console.log(response);
      if (response.status == 200) {
        dispatch(setStatus(Status.Success));
        dispatch(setToken(response.data.token));
        localStorage.setItem("jwt_token", response.data.token);
      } else {
        dispatch(setStatus(Status.Error));
      }
    } catch (error) {
      dispatch(setStatus(Status.Error));
    }
  };
}
