import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../utils/ProductList";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [] as Product[],
  reducers: {
    added: (state, action: PayloadAction<Product>) => {
      const found = state.find((item) => item.id === action.payload.id);
      // I want to add items to the cart
      // If the item exists in the cart increase its
      // quantity and if not just add the item
      // and set it's quantity to 1
      let updatedItem: Product | undefined;
      if (found) {
        updatedItem = { ...found };
      }
      if (updatedItem) {
        updatedItem.quantity++;
      } else {
        updatedItem = { ...action.payload, quantity: 1 };
      }
      const newItems = [
        ...state.filter((item) => item.id !== action.payload.id),
      ];
      return [...newItems, updatedItem];
    },
    removed: (state, action: PayloadAction<Product>) => {
      console.log("removed");
      const index = state.findIndex((i) => i.id === action.payload.id);
      return state.filter((_, i) => i !== index);
    },
    added_item: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      return state.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 };
        } else return { ...item };
      });
    },
    removed_item: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      const newItems = state.map((item, i) => {
        if (i === index && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else return { ...item };
      });
      return newItems.filter((item) => item.quantity > 0);
    },
  },
});

export const { added, added_item, removed_item, removed } = cartSlice.actions;

export default cartSlice.reducer;
