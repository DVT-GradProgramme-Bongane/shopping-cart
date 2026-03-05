import { useContext } from "react";
import "../styles/CartSummary.css";
import {
  CartProductContext,
  DecreaseItemCartContext,
  IncreaseItemCartContext,
  RemoveCartContext,
} from "../utils/ProductList";

export default function CartSummaryComponent() {
  const cartItems = useContext(CartProductContext);
  const remove = useContext(RemoveCartContext);
  const addItem = useContext(IncreaseItemCartContext);
  const removeItem = useContext(DecreaseItemCartContext);

  const totalPrice = cartItems?.reduce((accumulator, item) => {
    return item.quantity * item.price + accumulator;
  }, 0);
  const totalCartItems = cartItems?.reduce((totalItemsAccumulator, item) => {
    return item.quantity + totalItemsAccumulator;
  }, 0);

  return (
    <aside className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total items : {totalCartItems}</p>
      <p>Total price : R {totalPrice?.toFixed(2)}</p>

      <ul className="cart-summary-list">
        {cartItems?.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.title}</span>
            <div className="cart-summary-controls">
              <button
                onClick={() => removeItem(item)}
                className="decrease-item-button"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => addItem(item)} className="add-item-button">
                +
              </button>
              <button
                onClick={() => remove(item)}
                className="remove-item-button"
              >
                Remove
              </button>
            </div>
            <span className="cart-totals">
              R {(item.quantity * item.price).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
