import { useContext } from "react";
import "../styles/Header.css";
import { CartProductContext } from "../utils/ProductList";

export default function HeaderComponent() {
  const products = useContext(CartProductContext);
  console.log(products);
  return (
    <>
      <header className="shop-header">
        e-Shop
        <input className="search-bar-input" placeholder="search products..." />
        <div className="cart-container-div">
          <img
            src="src/assets/shopping-chart.png"
            alt="shopping cart icon"
            height={20}
          />
          <div className="count-paragraph">{products?.length}</div>
          <p>
            R{" "}
            {products
              ?.reduce((accumulator, product) => {
                return accumulator + product.price;
              }, 0)
              .toFixed(2)}
          </p>
        </div>
      </header>
    </>
  );
}
