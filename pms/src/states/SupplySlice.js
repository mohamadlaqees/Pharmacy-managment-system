import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loadingP: false,
  errorP: null,
  successP: null,
  quantity: 0,
};

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
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(purshaceProducts.pending, (state, action) => {
      state.successP = null;
      state.errorP = null;
      state.loadingP = true;
    });
    builder.addCase(purshaceProducts.fulfilled, (state, action) => {
      state.errorP = null;
      state.loadingP = false;
      state.successP = action.payload.message;
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
