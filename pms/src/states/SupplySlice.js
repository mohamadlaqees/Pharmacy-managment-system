import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loadingP: false,
  loadingB: false,
  errorP: null,
  successP: null,
  quantity: 0,
  pricedProducts: [],
  pricedProductsDetails: [],
  total: null,
};

export const searchPricedProdctsByName = createAsyncThunk(
  "supply/searchPricedProdctsByName ",
  async (obj, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `products/search/names/?page=${obj.PN}&string=${obj.name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPricedProducts = createAsyncThunk(
  "supply/getPricedProducts ",
  async (PN, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(`products/all/prices?page=${PN}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPricedProductsDetails = createAsyncThunk(
  "supply/getPricedProductsDetails ",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post("products/prices", {
        products: [
          {
            id: id,
          },
        ],
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const purshaceProducts = createAsyncThunk(
  "supply/purshaceProducts",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post("products/create/purchase", {
        products: [
          {
            id: item.pId,
            quantity: item.quantity,
            unit: item.type,
          },
        ],
        employee_id: item.eId,
        pharmacy_id: 1,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    resetL: (state, action) => {
      state.successP = null;
      state.errorP = null;
      state.total = null;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchPricedProdctsByName.pending, (state, action) => {
      state.successP = null;
      state.errorP = null;
      state.loadingP = true;
    });
    builder.addCase(searchPricedProdctsByName.fulfilled, (state, action) => {
      state.errorP = null;
      state.loadingP = false;
      state.pricedProducts = action.payload.data;
    });
    builder.addCase(searchPricedProdctsByName.rejected, (state, action) => {
      state.errorP = action.payload.response.data.message;
      state.successP = null;
    });

    builder.addCase(getPricedProducts.pending, (state, action) => {
      state.successP = null;
      state.errorP = null;
      state.loadingP = true;
    });
    builder.addCase(getPricedProducts.fulfilled, (state, action) => {
      state.errorP = null;
      state.loadingP = false;
      state.total = action.payload[0].total;
      state.pricedProducts = action.payload[0].data;
    });
    builder.addCase(getPricedProducts.rejected, (state, action) => {
      state.errorP = action.payload.response.data.message;
      state.successP = null;
    });

    builder.addCase(getPricedProductsDetails.pending, (state, action) => {
      state.successP = null;
      state.errorP = null;
      state.loadingP = true;
    });
    builder.addCase(getPricedProductsDetails.fulfilled, (state, action) => {
      state.errorP = null;
      state.loadingP = false;
      state.pricedProductsDetails = action.payload.data[0];
    });
    builder.addCase(getPricedProductsDetails.rejected, (state, action) => {
      state.errorP = action.payload.response.data.message;
      state.successP = null;
    });

    builder.addCase(purshaceProducts.pending, (state, action) => {
      state.successP = null;
      state.errorP = null;
      state.loadingB = true;
    });
    builder.addCase(purshaceProducts.fulfilled, (state, action) => {
      state.errorP = null;
      state.loadingB = false;
      // state.successP = action.payload.message;
      console.log(action);
    });
    builder.addCase(purshaceProducts.rejected, (state, action) => {
      state.errorP = action.payload.response.data.message;
      state.successP = null;
    });
  },
});
export default supplySlice.reducer;
export const { resetL, setQuantity } = supplySlice.actions;
