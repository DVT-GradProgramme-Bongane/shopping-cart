import "../styles/Header.css";

export default function HeaderComponent() {
  return (
    <>
      <header className="shop-header">
        e-Shop
        <div className="cart-container-div">
          <p>Number of items</p>
          <div className="cart-total-div">
            <label className="cart-label">Cart</label>
            <p>Cart total in Rands</p>
          </div>
        </div>
      </header>
    </>
  );
}
