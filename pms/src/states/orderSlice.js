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
      var resp;
      if (item.status !== "ALL" && item.date !== "") {
        resp = await axios.get(
          `/orders?page=${item.PageNumber}&date=${item.date}&status=${item.staus}`
        );
      } else if (item.status !== "ALL" && item.date === "") {
        console.log(`/orders?page=${item.PageNumber}&status=${item.status}`);
        resp = await axios.get(
          `/orders?page=${item.PageNumber}&status=${item.status}`
        );
        console.log("response", resp);
      } else if (item.status === "ALL" && item.date !== "") {
        resp = await axios.get(
          `/orders?page=${item.PageNumber}&date=${item.date}`
        );
      } else {
        resp = await axios.get(`/orders?page=${item.PageNumber}`);
      }
      console.log("resp", resp);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchInStoreOrders = createAsyncThunk(
  "fetchInStoreOrders",
  async (item, { rejectWithValue }) => {
    // console.log(item);  `/orders/in-store-orders/index-desc?${PageNumber}`
    try {
      var resp;
      if (item.status !== "ALL" && item.date !== "") {
        resp = await axios.get(
          `/orders/in-store-orders/index-desc?page=${item.PageNumber}&date=${item.date}&status=${item.staus}`
        );
      } else if (item.status !== "ALL" && item.date === "") {
        console.log(
          `/orders/in-store-orders/index-desc?page=${item.PageNumber}&status=${item.status}`
        );
        resp = await axios.get(
          `/orders/in-store-orders/index-desc?page=${item.PageNumber}&status=${item.status}`
        );
        console.log("response", resp);
      } else if (item.status === "ALL" && item.date !== "") {
        resp = await axios.get(
          `/orders/in-store-orders/index-desc?page=${item.PageNumber}&date=${item.date}`
        );
      } else {
        resp = await axios.get(
          `/orders/in-store-orders/index-desc?page=${item.PageNumber}`
        );
      }
      console.log("resp", resp);
      return resp.data;
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
      await axios.delete(`/orders/in-store-orders/delete/${orderId}`);
      return orderId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const rejectOrder = createAsyncThunk(
  "rejectOrder",
  async ({ orderId, reason }, { rejectWithValue }) => {
    // console.log(item);
    try {
      await axios.put(
        `/orders/online-orders/reject/${orderId}?reason=${reason}`
      );
      return orderId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// fetch boys
export const fetchDeliveryBoys = createAsyncThunk(
  "fetchDeliveryBoys",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`/orders/delivery_boys`);
      console.log("delivery boys",resp.data.delivery_boys)
      return resp.data.delivery_boys;
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
      console.log(localStorage.getItem("Storely"));
      if (localStorage.getItem("Storely"))
        await axios.post(
          `/orders/in-store-orders/store/${orderId}/${productId}/?quantity=1`
        );
      else
        await axios.post(
          `/orders/online-orders/store/${orderId}/${productId}/?quantity=1`
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
    try {
      if (method === "Storely")
        await axios.delete(
          `/orders/in-store-orders/remove/${orderId}/${productId}`
        );
      else
        await axios.delete(
          `/orders/online-orders/remove/${orderId}/${productId}`
        );
      return productId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const UpdateQuantity = createAsyncThunk(
  "UpdateQuantity",
  async ({ orderId, productId, quantity, method }, { rejectWithValue }) => {
    try {
      if (method === "Storely")
        await axios.put(
          `/orders/in-store-orders/update/${orderId}/${productId}?quantity=${quantity}`
        );
      else
        await axios.put(
          `/orders/online-orders/update/${orderId}/${productId}?quantity=${quantity}`
        );
      return productId;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
//delete online order
export const deleteOnlineOrder = createAsyncThunk(
  "deleteOnlineOrder",
  async (orderId, { rejectWithValue }) => {
    // console.log(item);
    try {
      await axios.delete(`/orders/online-orders/delete/${orderId}`);
      return orderId;
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
    delivery_boys: [],
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
    // delete onine order
    builder
      .addCase(deleteOnlineOrder.fulfilled, (state, action) => {
        removeOrder(action.payload); //action.payload is the order id
        state.orderError = false;
        state.orderLoading = false;
        state.total -= 1;
      })
      .addCase(deleteOnlineOrder.pending, (state, _) => {
        state.orderLoading = true;
        state.orderError = false;
      })
      .addCase(deleteOnlineOrder.rejected, (state, _) => {
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
        console.log();
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
        state.orderLoading = false;
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
    //rejec order
    builder
      .addCase(rejectOrder.fulfilled, (state, _) => {
        state.orderError = false;
        state.itemLoading = false;
        state.orderSuccess = true;
        state.total += 1;
      })
      .addCase(rejectOrder.pending, (state, _) => {
        state.itemLoading = true;
        state.orderError = false;
      })
      .addCase(rejectOrder.rejected, (state, _) => {
        state.itemLoading = false;
        state.orderError = true;
      }); //fetchDeliveryBoys
    builder
      .addCase(fetchDeliveryBoys.fulfilled, (state, action) => {
        state.orderError = false;
        state.itemLoading = false;
        state.orderSuccess = true;
        state.orderLoading = false;
        state.delivery_boys = action.payload;
        state.total += 1;
      })
      .addCase(fetchDeliveryBoys.pending, (state, _) => {
        state.itemLoading = true;
        state.orderLoading = true;
        state.orderError = false;
      })
      .addCase(fetchDeliveryBoys.rejected, (state, _) => {
        state.itemLoading = false;
        state.orderLoading = false;
        state.orderError = true;
      });
  },
});
export default orderSlice.reducer;
