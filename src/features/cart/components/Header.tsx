import "./Header.css";
import cartIcon from "../../../assets/shopping-chart.png";
import { useAppSelector } from "../../../app/hooks";

export default function HeaderComponent() {
  const cartItems = useAppSelector((state) => state.cartItems);

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
