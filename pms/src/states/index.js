import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storeSlice from "./StoreSlice";
const store = configureStore({
  reducer: {
    authSlice,
    storeSlice,
  },
});
export default store;
