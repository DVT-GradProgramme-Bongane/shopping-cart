import "../styles/CartSummary.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../app/store";
import { added, added_item, removed, removed_item } from "../cartItemsSlice";

export default function CartSummaryComponent() {
  type RootState = ReturnType<typeof store.getState>;
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems?.reduce((accumulator, item) => {
    return item.quantity * item.price + accumulator;
  }, 0);
  const totalCartItems = cartItems?.reduce((totalItemsAccumulator, item) => {
    return item.quantity + totalItemsAccumulator;
  }, 0);

  return (
    <aside className="cart-summary" id="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total items : {totalCartItems}</p>
      <p>Total price : R {totalPrice?.toFixed(2)}</p>

      <ul className="cart-summary-list">
        {cartItems?.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.title}</span>
            <div className="cart-summary-controls">
              <button
                onClick={() =>
                  dispatch({ type: removed_item.type, payload: item })
                }
                className="decrease-item-button"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch({ type: added_item.type, payload: item })
                }
                className="add-item-button"
              >
                +
              </button>
              <button
                onClick={() => dispatch({ type: removed.type, payload: item })}
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
