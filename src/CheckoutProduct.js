import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, img, title, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const deleteFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const FunctionCheckout = forwardRef((id, ref) => <div ref={ref}>{id}</div>);
  return (
    <FlipMove>
      <div className="checkoutProduct">
        <img className="checkoutProduct__img" src={img} />
        <div className="checkout__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="CheckoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={deleteFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
