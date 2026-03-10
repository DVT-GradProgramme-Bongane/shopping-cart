import "../styles/Header.css";
import cartIcon from "../assets/shopping-chart.png";
import { useSelector } from "react-redux";
import type store from "../../../app/store";

export default function HeaderComponent() {
  type RootState = ReturnType<typeof store.getState>;
  const cartItems = useSelector((state: RootState) => state.cartItems);

  const totalPrice = cartItems?.reduce((accumulator, item) => {
    return item.quantity * item.price + accumulator;
  }, 0);
  const totalCartItems = cartItems?.reduce((totalItemsAccumulator, item) => {
    return item.quantity + totalItemsAccumulator;
  }, 0);

  return (
    <>
      <header className="shop-header">
        e-Shop
        <input className="search-bar-input" placeholder="search products..." />
        <div className="cart-container-div">
          <a href="#cart-summary">
            <img src={cartIcon} alt="shopping cart icon" height={20} />
          </a>
          <div className="count-paragraph">{totalCartItems}</div>
          <p>R{totalPrice?.toFixed(2)}</p>
        </div>
      </header>
    </>
  );
}
