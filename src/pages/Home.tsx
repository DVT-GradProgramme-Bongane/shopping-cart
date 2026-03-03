import ProductCardComponent from "../components/ProductCard";

export default function HomePage() {
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
