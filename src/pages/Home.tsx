import { useReducer } from "react";
import HeaderComponent from "../components/Header";
import ProductCardLayout from "../layouts/ProductCardLayout";
import {
  AddCartContext,
  cartItemsReducer,
  CartProductContext,
  ProductsContext,
  RemoveCartContext,
  type Product,
} from "../utils/ProductList";
import CartSummaryComponent from "../components/CartSummary";

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

  function removeFromCart(removedProduct: Product) {
    dispatch({
      type: "removed",
      product: removedProduct,
    });
  }

  return (
    <main>
      <RemoveCartContext value={removeFromCart}>
        <ProductsContext value={products}>
          <AddCartContext value={addToCart}>
            <CartProductContext value={cartItems}>
              <HeaderComponent />
            <ProductCardLayout />
            <CartSummaryComponent />
            </CartProductContext>
          </AddCartContext>
        </ProductsContext>
      </RemoveCartContext>
    </main>
  );
}
