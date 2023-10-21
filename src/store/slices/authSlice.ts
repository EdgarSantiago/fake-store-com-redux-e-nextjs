import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "../store";

export interface AuthState {
  authState: boolean;
  authToken: string;
}

const initialState: AuthState = {
  authState: false,
  authToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setTokenState(state, action) {
      state.authToken = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth?.authState;

export default authSlice.reducer;
