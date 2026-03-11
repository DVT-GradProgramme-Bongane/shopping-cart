import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartItemsSlice";
import productReducer from "../features/products/productsSlice"

const rootReducer = combineReducers({
  cartItems: cartReducer,
  products: productReducer
});

export default rootReducer;
