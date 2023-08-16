import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loading: false,
  error: null,
  successGetProducts: null,
  success: null,
  data: [],
  total: null,
  details: [],
  allergyMedicins: [],
  allergyMessage: null,
  wishMedicins: [],
  wishMessage: null,
  numOfRate: null,
  name: null,
  brand: null,
  category: null,
  dosage: null,
  route: null,
  searchInput: null,
  otc: null,
  minPrice: null,
  maxPrice: null,
  rating: null,
  availability: null,
};
export const getProdcut = createAsyncThunk(
  "store/getProduct",
  async (PN, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(`/products?page=${PN}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProdcutDetails = createAsyncThunk(
  "store/getProdcutDetails",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(`/products/get/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addRate = createAsyncThunk(
  "store/addRate",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(
        `/products/${item.id}/rate/?rating=${item.num}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getRate = createAsyncThunk(
  "store/getRate",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(`/products/${id}/rating/get`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchByName = createAsyncThunk(
  "store/searchByName",
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

export const searchByBrand = createAsyncThunk(
  "store/searchByBrand",
  async (obj, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `products/search/labellers/?page=${obj.PN}&string=${obj.brand}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchByCategories = createAsyncThunk(
  "store/searchByCategories",
  async (obj, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `products/search/categories/?page=${obj.PN}&string=${obj.category}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchByDosageForm = createAsyncThunk(
  "store/searchByDosageForm",
  async (obj, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `products/search/dosage_forms/?page=${obj.PN}&string=${obj.dosage}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchByRoute = createAsyncThunk(
  "store/searchByRoute",
  async (obj, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `products/search/routes/?page=${obj.PN}&string=${obj.route}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFilteredProducts = createAsyncThunk(
  "store/getFilteredProducts",
  async (obj, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `products?page=${obj.PN}&availability=${obj.availability}&minPrice=${obj.minPrice}&maxPrice=${obj.maxPrice}&otc=${obj.otc}&rating=${obj.rating}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.error = null;
      state.success = null;
      state.total = null;
      state.wishMessage = null;
      state.allergyMessage = null;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDosage: (state, action) => {
      state.dosage = action.payload;
    },
    setRoute: (state, action) => {
      state.route = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchInput = action.payload;
    },
    setOtc: (state, action) => {
      state.otc = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setAvailability: (state, action) => {
      state.availability = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProdcut.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getProdcut.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
      state.total = action.payload.meta.total;
      state.successGetProducts = action.payload.message;
    });
    builder.addCase(getProdcut.rejected, (state, action) => {
      state.error = action.payload.message;
    });

    builder.addCase(getProdcutDetails.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getProdcutDetails.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.details = action.payload.data;
    });
    builder.addCase(getProdcutDetails.rejected, (state, action) => {
      state.error = action.payload.message;
    });

    builder.addCase(addRate.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(addRate.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.success = action.payload.message;
    });
    builder.addCase(addRate.rejected, (state, action) => {
      state.error = action.payload.response.data.message;
    });

    builder.addCase(getRate.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getRate.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.numOfRate = action.payload.data;
    });
    builder.addCase(getRate.rejected, (state, action) => {
      state.error = action.payload.response.data.message;
    });

    builder.addCase(searchByName.pending, (state, action) => {
      state.success = null;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(searchByName.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
      console.log(action)
    });
    builder.addCase(searchByName.rejected, (state, action) => {
      state.error = action.payload.response.data.message;
      state.success = null;
    });

    builder.addCase(searchByBrand.pending, (state, action) => {
      state.success = null;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(searchByBrand.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(searchByBrand.rejected, (state, action) => {
      state.success = null;
    });

    builder.addCase(searchByCategories.pending, (state, action) => {
      state.success = null;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(searchByCategories.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(searchByCategories.rejected, (state, action) => {
      state.success = null;
    });

    builder.addCase(searchByDosageForm.pending, (state, action) => {
      state.success = null;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(searchByDosageForm.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(searchByDosageForm.rejected, (state, action) => {
      state.success = null;
    });

    builder.addCase(searchByRoute.pending, (state, action) => {
      state.success = null;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(searchByRoute.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(searchByRoute.rejected, (state, action) => {
      state.success = null;
    });

    builder.addCase(getFilteredProducts.pending, (state, action) => {
      state.success = null;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getFilteredProducts.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
      state.total = action.payload.meta.total;
      console.log(action);
    });
    builder.addCase(getFilteredProducts.rejected, (state, action) => {
      state.success = null;
    });
  },
});
export default storeSlice.reducer;
export const {
  reset,
  setBrand,
  setCategory,
  setName,
  setDosage,
  setRoute,
  setSearchValue,
  setAvailability,
  setMaxPrice,
  setMinPrice,
  setOtc,
  setRating,
} = storeSlice.actions;
