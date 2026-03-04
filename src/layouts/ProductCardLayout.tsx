import { useContext } from "react";
import ProductCardComponent from "../components/ProductCard";
import "../styles/ProductLayout.css";
import { ProductContext, ProductsContext } from "../utils/ProductList";

export default function ProductCardLayout() {
  const products = useContext(ProductsContext);
  const productsDummy = products.slice(0, 2);
  return (
    <>
      <section className="products-section">
        <div className="product-layout-container">
          {productsDummy.map((product) => {
            return (
              <ProductContext key={product.id} value={product}>
                <ProductCardComponent key={product.id} />
              </ProductContext>
            );
          })}
        </div>
      </section>
    </>
  );
}
