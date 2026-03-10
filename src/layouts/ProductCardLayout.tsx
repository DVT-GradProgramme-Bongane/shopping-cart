import { useContext } from "react";
import ProductCardComponent from "../components/ProductCard";
import "../styles/ProductLayout.css";
import { ProductContext, ProductsContext } from "../utils/ProductList";
import { useSelector } from "react-redux";
import store from "../app/store";

export default function ProductCardLayout() {
  const products = useContext(ProductsContext);
  console.log(store.getState())
  // const products = useSelector(state: rootState => state.cartItems)
  return (
    <>
      <section className="products-section">
        <div className="product-layout-container">
          {products.map((product) => {
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
