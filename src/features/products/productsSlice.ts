import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";
import type { RootState } from "../../app/store";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetch", async (_, { rejectWithValue }) => {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return rejectWithValue(`Response status: ${response.status}`);
    }
    const result: Product[] = await response.json();
    return result;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Somehting went wrong";
    });
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
