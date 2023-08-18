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
      const { data } = await axios.get("applications/");
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
      const { data } = await axios.get(`applications/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const acceptApplicant = createAsyncThunk(
  "job/acceptApplicant",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.put(`applications/accept/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const rejectApplicant = createAsyncThunk(
  "job/rejectApplicant",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.put(`applications/reject/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addVaccancies = createAsyncThunk(
  "job/addVaccancies",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(`vacancies/store`, {
        title: item.title,
        description: item.desc,
        type: item.type,
        salary: item.salary,
        deadline: item.Ddate,
        number_of_vacancies: item.nOfV,
      });
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
      state.loading = null;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addVaccancies.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(addVaccancies.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
      state.successJ = action.payload.message;
    });
    builder.addCase(addVaccancies.rejected, (state, action) => {
      state.errorJ = action.response.data.message;
      state.successJ = null;
    });

    builder.addCase(getJobAppliactions.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(getJobAppliactions.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
      state.applications = action.payload.data;
    });
    builder.addCase(getJobAppliactions.rejected, (state, action) => {
      state.errorJ = action.response.data.message;
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
      state.application = action.payload.data;
      console.log(action);
    });
    builder.addCase(showAppliaction.rejected, (state, action) => {
      state.errorJ = action.response.data.message;
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
      state.successJ = action.payload.message;
      console.log(action);
    });
    builder.addCase(acceptApplicant.rejected, (state, action) => {
      state.errorJ = action.response.data.message;
      state.successJ = null;
    });

    builder.addCase(rejectApplicant.pending, (state, action) => {
      state.successJ = null;
      state.errorJ = null;
      state.loading = true;
    });
    builder.addCase(rejectApplicant.fulfilled, (state, action) => {
      state.errorJ = null;
      state.loading = false;
      console.log(action);
    });
    builder.addCase(rejectApplicant.rejected, (state, action) => {
      state.errorJ = action.response.data.message;
      state.successJ = null;
    });
  },
});
export default jobSlice.reducer;
export const { resetJ, setUserId } = jobSlice.actions;
