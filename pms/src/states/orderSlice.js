import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../Components/axios";
import {
  addProductToOrder,
  deleteProductFromCurrentOrder,
  removeOrder,
} from "../utils/AddToCurrentOrder";

export const fetchAllOrders = createAsyncThunk(
  "fetchAllOrders",
  async (item, { rejectWithValue }) => {
    // console.log(item);
    try {
      const { data } = await axios.get(`/orders`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchInStoreOrders = createAsyncThunk(
  "fetchInStoreOrders",
  async (PageNumber, { rejectWithValue }) => {
    // console.log(item);
    try {
      const { data } = await axios.get(
        `/orders/in-store-orders/index-desc?${PageNumber}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteInStoreOrder = createAsyncThunk(
  "deleteInStoreOrder",
  async (orderId, { rejectWithValue }) => {
    // console.log(item);
    try {
      const { data } = await axios.delete(
        `/orders/in-store-orders/delete/${orderId}`
      );
      return orderId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const createNewOrder = createAsyncThunk(
  "createNewOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/orders/in-store-orders/create`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const addItemToCurrentOrder = createAsyncThunk(
  "addItemToCurrentOrder",
  async ({ orderId, productId }, { rejectWithValue }) => {
    console.log("orderId", orderId);
    try {
      const s = await axios.post(
        `/orders/in-store-orders/store/${orderId}/${productId}/?quantity=1`
      );
      return { orderId: orderId, productId: productId };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItemFromOrder = createAsyncThunk(
  "deleteItemFromOrder",
  async ({ orderId, productId, method }, { rejectWithValue }) => {
    // console.log(item);
    try {
      if (method === "Storely")
        await axios.delete(
          `/orders/in-store-orders/remove/${orderId}/${productId}`
        );
      else console.log("method is not Storely");
      return productId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const UpdateQuantity = createAsyncThunk(
  "UpdateQuantity",
  async ({ orderId, productId, quantity }, { rejectWithValue }) => {
    try {
      if (localStorage.getItem("Storely"))
        await axios.put(
          `/orders/in-store-orders/update/${orderId}/${productId}?quantity=${quantity}`
        );
      else console.log("method is not Storely");
      return productId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// TODO: fetch customer oreders
// TODO: filter orders based on date and status

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orderLoading: false,
    orderError: null,
    orderSuccess: null,
    itemLoading: false,
    orders: [],
    total: 10,
  },
  reducers: {
    resetO: (state, action) => {
      state.orderSuccess = null;
      state.orderError = null;
      state.orderLoading = null;
    },
  },
  extraReducers: (builder) => {
    //fetch all orders
    builder
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.orders = action.payload.data;
        state.total = action.payload.meta.total;
        state.orderError = false;
        state.orderLoading = false;
      })
      .addCase(fetchAllOrders.pending, (state, action) => {
        state.orderLoading = true;
        state.orderError = false;
        state.orders = [];
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.orderLoading = false;
        state.orderError = true;
        state.orders = [];
      });
    // fetch in-store orders
    builder
      .addCase(fetchInStoreOrders.fulfilled, (state, action) => {
        state.orders = action.payload.data;
        state.total = action.payload.meta.total;
        state.orderError = false;
        state.orderLoading = false;
      })
      .addCase(fetchInStoreOrders.pending, (state, _) => {
        state.orderLoading = true;
        state.orderError = false;
        state.orders = [];
      })
      .addCase(fetchInStoreOrders.rejected, (state, _) => {
        state.orderLoading = false;
        state.orderError = true;
        state.orders = [];
      });
    //delete in-store order
    builder
      .addCase(deleteInStoreOrder.fulfilled, (state, action) => {
        removeOrder(action.payload); //action.payload is the order id
        if (action.payload === parseInt(localStorage.getItem("currentOrderId")))
          localStorage.removeItem("currentOrderId");
        state.orderError = false;
        state.orderLoading = false;
        state.total -= 1;
      })
      .addCase(deleteInStoreOrder.pending, (state, _) => {
        state.orderLoading = true;
        state.orderError = false;
      })
      .addCase(deleteInStoreOrder.rejected, (state, _) => {
        state.orderLoading = false;
        state.orderError = true;
      });
    //create new order
    builder
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.orderError = false;
        state.orderLoading = false;
        state.total += 1;
      })
      .addCase(createNewOrder.pending, (state, _) => {
        state.orderLoading = true;
        state.orderError = false;
      })
      .addCase(createNewOrder.rejected, (state, _) => {
        state.orderLoading = false;
        state.orderError = true;
      });
    //add item to the current order
    builder
      .addCase(addItemToCurrentOrder.fulfilled, (state, action) => {
        addProductToOrder(action.payload.orderId, action.payload.productId); // local storage
        state.orderError = false;
        state.orderLoading = false;
        state.total += 1;
      })
      .addCase(addItemToCurrentOrder.pending, (state, _) => {
        state.orderLoading = true;
        state.orderError = false;
      })
      .addCase(addItemToCurrentOrder.rejected, (state, _) => {
        state.orderLoading = false;
        state.orderError = true;
      });
    // remove item from order
    builder
      .addCase(deleteItemFromOrder.fulfilled, (state, action) => {
        deleteProductFromCurrentOrder(action.payload);
        state.orderError = false;
        state.itemLoading = false;
        state.orderLoading = false;
        state.total += 1;
      })
      .addCase(deleteItemFromOrder.pending, (state, _) => {
        state.itemLoading = true;
        state.orderLoading = true;
        state.orderError = false;
      })
      .addCase(deleteItemFromOrder.rejected, (state, _) => {
        state.itemLoading = false;
        state.orderError = true;
      });
    // update quantity of a product in an order
    builder
      .addCase(UpdateQuantity.fulfilled, (state, _) => {
        state.orderError = false;
        state.itemLoading = false;

      })
      .addCase(UpdateQuantity.pending, (state, _) => {
        state.itemLoading = true;
        state.orderError = false;
      })
      .addCase(UpdateQuantity.rejected, (state, _) => {
        state.itemLoading = false;
        state.orderError = true;
      });
  },
});
export default orderSlice.reducer;
