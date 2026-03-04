import { useContext } from "react";
import "../styles/ProductCard.css";
import { AddCartContext, ProductContext } from "../utils/ProductList";

export default function ProductCardComponent() {
  const product = useContext(ProductContext);
  const handleOnClick = useContext(AddCartContext);

  return (
    <>
      <article className="product-card">
          <img
            src={product.image}
            alt="Product image"
          />

          <div className="product-price">
            <p>R {product.price}</p>
          </div>

          <div className="product-title">
            <p>{product.title}</p>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>
          
          <div className="product-category">
            <p>{product.category}</p>
          </div>

          <div className="product-rating">
            <p>{product.rating.rate}</p>
          </div>

          <div className="product-rating-count">
            <p>{product.rating.count}</p>
          </div>
          
        <button
          className="add-to-cart-button"
          onClick={() => handleOnClick(product)}
        >
          Add to cart
        </button>
      </article>
    </>
  );
}
