import "../styles/Header.css";
import type { Product } from "../utils/ProductList";

export default function HeaderComponent({products}) {
  console.log(products);
  return (
    <>
      <header className="shop-header">
        e-Shop
        <div className="cart-container-div">
          <p>{products.length}</p>
          <div className="cart-total-div">
            <label className="cart-label">Cart</label>
            <p>
              R {products.reduce((accumulator, product) => {
                return accumulator + product.price;
              }, 0)
              }
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
