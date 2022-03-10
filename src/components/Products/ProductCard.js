import React, { useContext } from "react";
import CartContext from "../content/cart/CartContext";
import Rating from "../rating/Rating";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="productCard__wrapper">
        <div>
          <img className="productCard__img" src={product.image} />
          <h4>{product.name}</h4>
          <div className="ProductCard__price">
            <h5>{product.price}$</h5>
          </div>
          <div className="ProductCard__Rateing">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviwes`}
            />
          </div>
          <button
            className="ProductCard__button"
            onClick={() => addToCart(product)}
          >
            Add to basket
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
