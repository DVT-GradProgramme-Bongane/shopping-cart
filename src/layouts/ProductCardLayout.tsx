import { useEffect } from "react";
import ProductCardComponent from "../features/cart/components/ProductCard";
import "../styles/ProductLayout.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productsSlice";

export default function ProductCardLayout() {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <section className="products-section">
        <div className="product-layout-container">
          {products.map((product) => {
            return <ProductCardComponent product={product} />;
          })}
        </div>
      </section>
    </>
  );
}
