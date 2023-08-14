import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storeSlice from "./StoreSlice";
import ChartReducer from "./ChartSlice";
import jobSlice from "./jobSlice";
import SupplySlice from "./SupplySlice";
import loginSlice from "./loginSlice";
import orderReducer from './orderSlice'
const store = configureStore({
  reducer: {
    ChartReducer,
    authSlice,
    storeSlice,
    jobSlice,
    SupplySlice,
    loginSlice,
    orderReducer,
  },
});
export default store;
