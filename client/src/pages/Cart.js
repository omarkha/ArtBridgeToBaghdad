import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SelectedPainting from "../components/SelectedPainting";
import { CartContext } from "../context/cartContext";
import Images from "../images";

const Cart = () => {
  const { cartItems, addCartItem, removeCartItem } = useContext(CartContext);

  const removeItem = (id) => {
    removeCartItem(id);
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

  useEffect(() => getTotal(), [cartItems]);
  return (
    <div className="container">
      {" "}
      <h1 className="display-5 my-5">
        {" "}
        You have {cartItems.length} items in your Cart
      </h1>
      <div className="cart-view">
        {cartItems.length > 0 ? (
          cartItems.map((e, i) => (
            <SelectedPainting
              img_url={e.img_url}
              price={e.price}
              width={e.width}
              height={e.height}
              id={e.id}
              key={e.id}
              removeItem={removeItem}
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
            {"The total is $" + Math.floor(printTotal() * 100) / 100}
          </h3>
        </div>

        <Link to="./purchase" className="btn btn-success">
          Purchase Items
        </Link>
      </div>
    </div>
  );
};

export default Cart;
