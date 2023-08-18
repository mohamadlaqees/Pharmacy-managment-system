import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loadingS: false,
  loadingC: false,
  errorS: null,
  successS: null,
  stockProducts: [],
  total: null,
  orderLimit: 0,
  minimumStockLevel: 0,
  price: 0,
};

export const getStockProducts = createAsyncThunk(
  "stock/getStockProducts ",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(`products/purchasedProducts`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setStockProductsPrice = createAsyncThunk(
  "stock/setStockProductsPrice",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(
        `products/purchasedProducts/${item.id}/price/set`,
        {
          price: item.price,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setStockProductsOrderLimit = createAsyncThunk(
  "stock/setStockProductsOrderLimit",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(
        `products/purchasedProducts/${item.id}/orderLimit/set`,
        {
          orderLimit: item.OL,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setStockProductsMinimumLevel = createAsyncThunk(
  "stock/setStockProductsMinimumLevel",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(
        `products/purchasedProducts/${item.id}/minimumStockLevel/set`,
        {
          minimumStockLevel: item.ML,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    resetS: (state, action) => {
      state.successS = null;
      state.errorS = null;
      state.total = null;
      state.price = 0;
      state.orderLimit = 0;
      state.minimumStockLevel = 0;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setOrderLimit: (state, action) => {
      state.orderLimit = action.payload;
    },
    setMinimumStockLevel: (state, action) => {
      state.minimumStockLevel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStockProducts.pending, (state, action) => {
      state.successS = null;
      state.errorS = null;
      state.loadingS = true;
    });
    builder.addCase(getStockProducts.fulfilled, (state, action) => {
      state.errorS = null;
      state.loadingS = false;
      state.stockProducts = action.payload.data;
      state.total = action.payload.meta.total;
    });
    builder.addCase(getStockProducts.rejected, (state, action) => {
      state.errorS = action.payload.response.data.message;
      state.successS = null;
    });

    builder.addCase(setStockProductsPrice.pending, (state, action) => {
      state.successS = null;
      state.errorS = null;
      state.loadingS = true;
    });
    builder.addCase(setStockProductsPrice.fulfilled, (state, action) => {
      state.errorS = null;
      state.loadingS = false;
      console.log(action);
    });
    builder.addCase(setStockProductsPrice.rejected, (state, action) => {
      state.errorS = action.payload.response.data.message;
      state.successS = null;
    });

    builder.addCase(setStockProductsOrderLimit.pending, (state, action) => {
      state.successS = null;
      state.errorS = null;
      state.loadingS = true;
    });
    builder.addCase(setStockProductsOrderLimit.fulfilled, (state, action) => {
      state.errorS = null;
      state.loadingS = false;
      console.log(action);
    });
    builder.addCase(setStockProductsOrderLimit.rejected, (state, action) => {
      state.errorS = action.payload.response.data.message;
      state.successS = null;
    });

    builder.addCase(setStockProductsMinimumLevel.pending, (state, action) => {
      state.successS = null;
      state.errorS = null;
      state.loadingS = true;
    });
    builder.addCase(setStockProductsMinimumLevel.fulfilled, (state, action) => {
      state.errorS = null;
      state.loadingS = false;
      console.log(action);
    });
    builder.addCase(setStockProductsMinimumLevel.rejected, (state, action) => {
      state.errorS = action.payload.response.data.message;
      state.successS = null;
    });
  },
});
export default stockSlice.reducer;
export const { resetS, setOrderLimit, setMinimumStockLevel, setPrice } =
  stockSlice.actions;
