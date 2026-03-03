import { useContext } from "react";
import ProductCardComponent from "../components/ProductCard";
import "../styles/ProductLayout.css";
import { ProductContext, ProductsContext } from "../utils/ProductList";

export default function ProductCardLayout() {
  const products = useContext(ProductsContext);
  return (
    <>
      {products.map((product) => {
        return (
          <ProductContext value={product}>
            <ProductCardComponent />
          </ProductContext>
        );
      })}
    </>
  );
}
