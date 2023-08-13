import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loading: false,
  errorP: null,
  successP: null,
};

export const purshaceProducts = createAsyncThunk(
  "supply/purshaceProducts",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        const { data } = await axios.post("products/create/purchase", {
        //   products[0][item.id]: item.id,
        //   products[0][item.quantity]:item.quantity,
        //   products[0][unit]:item.unit,
        //   employee_id:item.id,
        //   pharmacy_id:1
        });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const SupplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {
    resetL: (state, action) => {
      state.successP = null;
      state.errorP = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(purshaceProducts.pending, (state, action) => {
      state.successP = null;
      state.errorP = null;
      state.loading = true;
    });
    builder.addCase(purshaceProducts.fulfilled, (state, action) => {
      state.errorP = null;
      state.loading = false;
      state.successP = action.payload.message;
      console.log(action);
    });
    builder.addCase(purshaceProducts.rejected, (state, action) => {
      state.errorP = action.payload.response.data.message;
      state.successP = null;
    });
  },
});
export default SupplySlice.reducer;
export const { resetL } = SupplySlice.actions;
