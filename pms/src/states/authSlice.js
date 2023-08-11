import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { loading: false, error: null };
export const login = createAsyncThunk("auth/login", async (item, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axios.post("http://localhost:8000/api/login", {
     email:item.email,
     password:item.password,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.error=null;
      state.loading=false;
      console.log(action)
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default authSlice.reducer;
