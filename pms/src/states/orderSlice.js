import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../Components/axios";

export const fetchAllOrders = createAsyncThunk(
  "fetchAllOrders",
  async (item, { rejectWithValue }) => {
    // console.log(item);
    try {
      const { data } = await axios.get(`/orders`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchInStoreOrders = createAsyncThunk(
  "fetchInStoreOrders",
  async (PageNumber, { rejectWithValue }) => {
    // console.log(item);
    try {
      const { data } = await axios.get(`/orders/in-store-orders/index-desc?${PageNumber}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// TODO: fetch customer oreders
// TODO: filter orders based on date and status

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orderLoading: false,
    orderError: null,
    orderSuccess: null,
    orders: [],
    total: 10,
  },
  reducers: {
    resetO: (state, action) => {
      state.orderSuccess = null;
      state.orderError = null;
      state.orderLoading = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
      state.orders = action.payload.data;
      state.total = action.payload.meta.total;
      // console.log(state.total);
    });

    builder.addCase(fetchInStoreOrders.fulfilled, (state, action) => {
      state.orders = action.payload.data;
      state.total = action.payload.meta.total;
      // console.log(state.total);
    });
  },
});
export default orderSlice.reducer;
