import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storeSlice from "./StoreSlice";
import ChartReducer from "./ChartSlice";
const store = configureStore({
  reducer: {
    authSlice,
    storeSlice,
    ChartReducer,
  },
});
export default store;
