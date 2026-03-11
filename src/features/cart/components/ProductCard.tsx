import "./ProductCard.css";
import { itemAdded } from "../cartItemsSlice";
import { useAppDispatch } from "../../../app/hooks";
import type { Product } from "../../../types/Product"

interface ProductCardProps {
  product: Product;
}


export default function ProductCardComponent({product} : ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <article className="product-card">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.title} />
          <span className="product-category-badge">{product.category}</span>
        </div>

        <div className="product-information-container">
          <p className="product-price">R {product.price.toFixed(2)}</p>
          <p className="product-title">{product.title}</p>
          <p className="product-description">{product.description}</p>
        </div>

        <div className="product-meta">
          <div className="product-rating">
            <span className="product-rating-score">
              {"\u2b52" + product.rating.rate}{" "}
            </span>
            <span className="product-rating-count">
              {"(" + product.rating.count + ")"}
            </span>
          </div>
        </div>

        <button
          className="add-to-cart-button"
          onClick={() => dispatch(itemAdded(product))}
        >
          Add to cart
        </button>
      </article>
    </>
  );
}
