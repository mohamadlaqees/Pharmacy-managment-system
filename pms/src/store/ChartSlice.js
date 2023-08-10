import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

const fetchChart = createAsyncThunk(
  "chart/fetchChart",
  async (item, { rejectWithValue }) => {
    const todayDate = new Date().toISOString().slice(0, 10);
    const url = `dashboard/${item.stat}?date=${todayDate}&period=${item.period}.toLowerCase()`;
    try {
      const res = await axios.get(url);
      console.log(res.data.data)
      return res.data.data;
    } catch (error) {
      console.log(error.response.data.message)
      return rejectWithValue(error.response.data.message);
    }
  }
);

const ChartSlice = createSlice({
  name: "Chart",
  initialState: {
    data: [], 
    error: false,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchChart.pending, state => {
      state.data= []
      state.loading = true
      state.error = false
    })
    .addCase(fetchChart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false
    })
    .addCase(fetchChart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { increment, decrement } = ChartSlice.actions;
export default ChartSlice.reducer;
