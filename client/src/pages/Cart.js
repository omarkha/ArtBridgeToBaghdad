import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SelectedPainting from "../components/SelectedPainting";
import { CartContext } from "../context/cartContext";
import Images from "../images";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useShoppingCart } from "use-shopping-cart";
import useCheckout from "../utils/useCheckout";

const Cart = () => {
  const { cartDetails, removeItem, cartCount, tota } = useShoppingCart();
  const handleCheckout = useCheckout();
  const removeCartItem = (id) => {
    removeItem(id);
  };

  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let prices = [];
    cartItems.forEach((e, i) => {
      prices.push(e.price);
    });
    console.log(prices);
    let t = 0;
    prices.forEach((e) => {
      t += e;
      setTotal(t);
    });
    if (cartItems.length < 1) {
      setTotal(0);
    }
    console.log(total);
  };

  const printTotal = () => {
    return total;
  };

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://artbridgetobaghdad.onrender.com/payment",
        method: "post",
        data: {
          amount: total * 100,
          token,
        },
      });
      if (response.status === 200) {
        console.log("payment successful");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cartItems = Object.keys(cartDetails).map((key) => {
    return cartDetails[key];
  });

  useEffect(() => getTotal(), [cartItems]);
  return (
    <div className="container">
      {" "}
      <h1 className="display-5 my-5"> Your Cart</h1>
      <div className="cart-view">
        {cartItems.length > 0 ? (
          cartItems.map((e, i) => (
            <SelectedPainting
              img_url={e.img_url}
              price={e.price}
              title={e.name}
              width={e.width}
              height={e.height}
              id={e._id}
              key={e._id}
              product={e}
              removeItem={removeCartItem}
            />
          ))
        ) : (
          <h1>You have not selected anything yet!</h1>
        )}
      </div>
      <div className="cart-purchase">
        <div className="cart-info">
          <h3>{"You have " + cartItems.length + "  items selected"}</h3>
          <h3 id="cart-total" onClick={() => getTotal()}>
            {"The total is $" + Math.floor(printTotal()) / 100}
          </h3>
        </div>

        <button
          onClick={handleCheckout}
          disabled={!cartCount}
          className="btn-slide-purchase"
        >
          Purchase Items
        </button>
      </div>
    </div>
  );
};

export default Cart;
