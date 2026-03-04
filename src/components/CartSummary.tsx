export default function CartSummaryComponent() {
  return (
    <aside className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total items : total items</p>
      <p>Total price : total price</p>

      <ul className="cart-summary-list">
        <li key={0} className="cart-item">
          <span>item title</span>
          <div className="cart-summary-controls">
            <button onClick={() => {}} className="decrease-item-button">
              -
            </button>
            <span>item quantity</span>
            <button onClick={() => {}} className="add-item-button">
              +
            </button>
            <button onClick={() => {}} className="remove-item-button">
              Remove
            </button>
          </div>
          <span>R item total</span>
        </li>
      </ul>
    </aside>
  );
}
