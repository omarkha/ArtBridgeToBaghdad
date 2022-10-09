import React, { Component, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (
    xtype,
    xid,
    ximg_url,
    xprice,
    xwidth,
    xheight,
    xtitle
  ) => {
    setCartItems([
      ...cartItems,
      {
        type: xtype,
        id: xid,
        img_url: ximg_url,
        price: xprice,
        width: xwidth,
        height: xheight,
        title: xtitle,
      },
    ]);
    console.log("item: " + xid + " is added. ");
  };
  const removeCartItem = (xid) => {
    setCartItems(cartItems.filter((item) => item.id !== xid));
    console.log("item: " + xid + " is removed. ");
  };

  const printCartItems = () => {
    console.log(cartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addCartItem, removeCartItem, printCartItems }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
