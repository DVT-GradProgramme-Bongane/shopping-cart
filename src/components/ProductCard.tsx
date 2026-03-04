import { useContext } from "react";
import "../styles/ProductCard.css";
import { AddCartContext, ProductContext } from "../utils/ProductList";

export default function ProductCardComponent() {
  const product = useContext(ProductContext);
  const handleOnClick = useContext(AddCartContext);

  return (
    <>
      <article className="product-card">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.title} />
          <span className="product-category-badge">{product.category}</span>
        </div>

        <div className="product-price">
          <p>R {product.price}</p>
        </div>

        <div className="product-title">
          <p>{product.title}</p>
        </div>

        <div className="product-description">
          <p>{product.description}</p>
        </div>
       
        <div className="product-rating">
          <span className="product-rating-score">{product.rating.rate}</span>
          <span className="product-rating-count">{product.rating.count}</span>
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
