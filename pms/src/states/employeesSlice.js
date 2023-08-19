import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loading: false,
  errorE: null,
  successE: null,
  employees: [],
};

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get("/employees");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const emplyeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    resetL: (state, action) => {
      state.successE = null;
      state.errorE = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state, action) => {
      state.successE = null;
      state.errorE = null;
      state.loading = true;
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.errorE = null;
      state.loading = false;
      state.employees = action.payload.data;
      console.log(action);
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      state.errorE = action.payload.response.data.message;
      state.successE = null;
    });
  },
});
export default emplyeesSlice.reducer;
export const { resetL } = emplyeesSlice.actions;
