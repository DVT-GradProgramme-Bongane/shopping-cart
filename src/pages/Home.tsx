import HeaderComponent from "../features/cart/components/Header";
import ProductCardLayout from "../layouts/ProductCardLayout";
import CartSummaryComponent from "../features/cart/components/CartSummary";

export default function HomePage() {
  return (
    <main>
      <HeaderComponent />
      <ProductCardLayout />
      <CartSummaryComponent />
    </main>
  );
}
