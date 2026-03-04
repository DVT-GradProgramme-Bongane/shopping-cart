import { useContext } from "react";
import "../styles/ProductCard.css";
import { AddCartContext, ProductContext } from "../utils/ProductList";

export default function ProductCardComponent() {
  const product = useContext(ProductContext);
  const handleOnClick = useContext(AddCartContext);

  return (
    <>
      <div className="product">
        <div className="product-information-container">
          <img
            src={product.image}
            alt="product-image"
            height={200}
            width={200}
          ></img>
          <p>R {product.price}</p>
          <p>{product.title}</p>
          <div className="description-box">
            <p className="description">{product.description}</p>
          </div>
          <p>{product.category}</p>
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
        </div>
        <button
          className="add-to-cart-button"
          onClick={() => handleOnClick(product)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
