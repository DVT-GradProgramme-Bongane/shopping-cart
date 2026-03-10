import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartItemsSlice";

const rootReducer = combineReducers({
  cartItems: cartReducer,
});

export default rootReducer;
