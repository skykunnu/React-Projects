import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./axiosConfig";

export const fetchProducts = createAsyncThunk("fetchProduct", async () => {
  const response = await instance.get("/products");
  return response.data;
});
export const fetchSingleProduct = createAsyncThunk(
  "singleFetch",
  async (id) => {
    console.log(id);

    const response = await instance.get("/products/" + id);
    return response.data;
  }
);

export const slice = createSlice({
  name: "EcomSlice",
  initialState: {
    products: [],
    loading: false,
    singleProduct: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
        console.log("rishi");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("hello wrold");
      }),
      builder
        .addCase(fetchSingleProduct.pending, (state, action) => {
          state.loading = true;
          console.log("rishi");
        })
        .addCase(fetchSingleProduct.fulfilled, (state, action) => {
          //    state.products=action.payload.products
          console.log(action.payload);
          state.singleProduct = action.payload.product;
        })
        .addCase(fetchSingleProduct.rejected, (state, action) => {
          console.log("hello wrold");
        });
  },
});

export const reducer = slice.reducer;
