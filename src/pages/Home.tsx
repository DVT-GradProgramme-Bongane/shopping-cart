import { use, useReducer } from "react";
import HeaderComponent from "../components/Header";
import ProductCardLayout from "../layouts/ProductCardLayout";
import {
  AddCartContext,
  cartItemsReducer,
  CartProductContext,
  DecreaseItemCartContext,
  IncreaseItemCartContext,
  ProductsContext,
  RemoveCartContext,
  type Product,
} from "../utils/ProductList";
import CartSummaryComponent from "../components/CartSummary";

const productsPromise = getData();

export default function HomePage() {
  const products = use(productsPromise);
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

  function decreaseItemsFromCart(decreasedProduct: Product) {
    dispatch({
      type: "removed_item",
      product: decreasedProduct,
    });
  }

  function increaseItemsInCart(increasedProduct: Product) {
    dispatch({
      type: "added_item",
      product: increasedProduct,
    });
  }

  return (
    <main>
      <RemoveCartContext value={removeFromCart}>
        <DecreaseItemCartContext value={decreaseItemsFromCart}>
          <IncreaseItemCartContext value={increaseItemsInCart}>
            <ProductsContext value={products}>
              <AddCartContext value={addToCart}>
                <CartProductContext value={cartItems}>
                  <HeaderComponent />
                  <ProductCardLayout />
                  <CartSummaryComponent />
                </CartProductContext>
              </AddCartContext>
            </ProductsContext>
          </IncreaseItemCartContext>
        </DecreaseItemCartContext>
      </RemoveCartContext>
    </main>
  );
}

async function getData(): Promise<Product[]> {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
}
