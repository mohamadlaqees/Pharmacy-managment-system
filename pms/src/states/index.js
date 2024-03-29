import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storeSlice from "./storeSlice";
import ChartReducer from "./ChartSlice";
import jobSlice from "./jobSlice";
import supplySlice from "./supplySlice";
import loginSlice from "./loginSlice";
import orderReducer from "./orderSlice";
import stockSlice from "./stockSlice";
import employeesSlice from "./employeesSlice";
const store = configureStore({
  reducer: {
    ChartReducer,
    authSlice,
    storeSlice,
    jobSlice,
    supplySlice,
    loginSlice,
    orderReducer,
    stockSlice,
    employeesSlice,
  },
});
export default store;
