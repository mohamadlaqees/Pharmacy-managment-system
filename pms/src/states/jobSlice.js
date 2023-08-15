import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loading: false,
  errorJ: null,
  successJ: null,
  applications: [],
  application: [],
  CV: null,
};

export const getJobAppliactions = createAsyncThunk(
  "job/getJobAppliactions",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get("applicant");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const showAppliaction = createAsyncThunk(
  "job/showAppliaction",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(`applicant/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCV = createAsyncThunk("job/getCV", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axios.get(`getFile/${id}`);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const acceptApplicant = createAsyncThunk(
  "job/acceptApplicant",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(`/changeApplicantStatus/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteAppliaction = createAsyncThunk(
  "job/deleteAppliaction",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.delete(`applicant/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    resetJ: (state, action) => {
      state.successJ = null;
      state.errorJ = null;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getJobAppliactions.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(getJobAppliactions.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
      state.applications = action.payload.Applicant;
    });
    builder.addCase(getJobAppliactions.rejected, (state, action) => {
      state.successJ = null;
    });

    builder.addCase(showAppliaction.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(showAppliaction.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
      state.application = action.payload.Applicant;
    });
    builder.addCase(showAppliaction.rejected, (state, action) => {
      state.successJ = null;
    });

    builder.addCase(acceptApplicant.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(acceptApplicant.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
    });
    builder.addCase(acceptApplicant.rejected, (state, action) => {
      state.successJ = null;
    });

    builder.addCase(getCV.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(getCV.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
      state.CV = action.payload;
    });
    builder.addCase(getCV.rejected, (state, action) => {
      state.successJ = null;
    });

    builder.addCase(deleteAppliaction.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(deleteAppliaction.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
      state.successJ = action.payload.success;
    });
    builder.addCase(deleteAppliaction.rejected, (state, action) => {
      state.successJ = null;
    });
  },
});
export default jobSlice.reducer;
export const { resetJ, setUserId } = jobSlice.actions;
