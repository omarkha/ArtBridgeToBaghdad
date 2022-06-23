import React, { Component, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (type, id) => {
    setCartItems([...cartItems, { type: type, id: id }]);
  };
  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
