import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, img, price, rating, id }) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      product: {
        id: id,
        title: title,
        image: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
      </div>
      <div className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={img} alt="Product__img" className="product__img" />
      <button className="cart__button" onClick={addToCart}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
