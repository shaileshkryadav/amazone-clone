import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Button, Card } from "@mui/material";
import { db } from "./firebase";
import { Male } from "@mui/icons-material";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const pay = (e) => {
    db.collection("users")
      .doc("shyam")
      .set({
        name: "shyam",
        product: {
          id: 1,
          title: "The one way home",
          rating: 5,
          price: "20",
        },
      })
      .then(function () {
        console.log("db created");
      });
    e.preventDefault();
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address </h3>
          </div>
          <div className="user__paymentAddress">
            <p>{user?.email}</p>
            <p>React 1.0.1</p>
            <p>USA, Louisiana</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
          <form>
            <button onClick={pay}>Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
