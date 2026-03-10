import { use } from "react";
import HeaderComponent from "../features/cart/components/Header";
import ProductCardLayout from "../layouts/ProductCardLayout";
import { ProductsContext, type Product } from "../utils/ProductList";
import CartSummaryComponent from "../features/cart/components/CartSummary";

const productsPromise = getData();

export default function HomePage() {
  const products = use(productsPromise);

  return (
    <main>
      <ProductsContext value={products}>
        <HeaderComponent />
        <ProductCardLayout />
        <CartSummaryComponent />
      </ProductsContext>
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
