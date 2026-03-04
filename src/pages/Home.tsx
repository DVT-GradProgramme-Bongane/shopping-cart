import { useReducer, useState } from "react";
import HeaderComponent from "../components/Header";
import ProductCardLayout from "../layouts/ProductCardLayout";
import {
  AddCartContext,
  cartItemsReducer,
  CartProductContext,
  ProductsContext,
  type Product,
} from "../utils/ProductList";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
const response = await fetch("https://fakestoreapi.com/products");
const products = await response.json();

export default function HomePage() {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, []);
  function addToCart(newProduct: Product) {
    dispatch({
      type: "added",
      product: newProduct,
    });
  }

  return (
    <main>
      <ProductsContext value={products}>
        <AddCartContext value={addToCart}>
          <CartProductContext value={cartItems}>
            <HeaderComponent />
          </CartProductContext>
          <ProductCardLayout />
        </AddCartContext>
      </ProductsContext>
    </main>
  );
}
