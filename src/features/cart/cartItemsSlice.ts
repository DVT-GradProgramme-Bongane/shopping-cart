import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [] as Product[],
  reducers: {
    itemAdded: (state, action: PayloadAction<Product>) => {
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
    itemRemoved: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      return state.filter((_, i) => i !== index);
    },
    itemIncremented: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      return state.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 };
        } else return { ...item };
      });
    },
    itemDecreased: (state, action: PayloadAction<Product>) => {
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

export const { itemAdded, itemIncremented, itemDecreased, itemRemoved } =
  cartSlice.actions;

export default cartSlice.reducer;
