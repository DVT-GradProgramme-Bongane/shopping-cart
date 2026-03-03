import { useState } from "react";
import HeaderComponent from "../components/Header";
import ProductCardLayout from "../layouts/ProductCardLayout";
import { ProductsContext, type Product } from "../utils/ProductList";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
const response = await fetch("https://fakestoreapi.com/products");
const products = await response.json();

export default function HomePage() {
  const [cartItems, setCartItems] = useState<Product>();
  return (
    <>
      <HeaderComponent />
      <ProductsContext value={products}>
        <ProductCardLayout />
      </ProductsContext>
    </>
  );
}
