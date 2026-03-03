import ProductCardComponent from "../components/ProductCard";

export default function ProductCardLayout() {
  return (
    <>
      <div className="product-layout">
        <ProductCardComponent />
        <ProductCardComponent />
        <ProductCardComponent />
      </div>
    </>
  );
}
