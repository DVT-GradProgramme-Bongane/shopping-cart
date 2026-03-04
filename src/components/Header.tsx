import { useContext } from "react";
import "../styles/Header.css";
import { CartProductContext, type Product } from "../utils/ProductList";

export default function HeaderComponent() {
  const products = useContext(CartProductContext)
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
