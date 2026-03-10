import { combineReducers } from "@reduxjs/toolkit";
import reducer from "../features/cart/cartItemsSlice";

const rootReducer = combineReducers({
  cartItems: reducer,
});

export default rootReducer;
