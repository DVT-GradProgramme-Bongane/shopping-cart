import ProductCardLayout from "../layouts/ProductCardLayout";
import { ProductsContext } from "../utils/ProductList";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
const response = await fetch("https://fakestoreapi.com/products");
const products = await response.json();

export default function HomePage() {
  return (
    <>
      <ProductsContext value={products}>
        <ProductCardLayout />
      </ProductsContext>
    </>
  );
}
