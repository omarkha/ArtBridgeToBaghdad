import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Painting = (props) => {
  const { cartItems, addCartItem, removeCartItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const checkAdded = () => {
    cartItems.map((item) =>
      item.id === props.id ? setAdded(false) : setAdded(true)
    );
  };

  return (
    <div className="painting">
      <div>
        <img src={props.img_url} />
      </div>
      <h4 id="painting-title">{props.title}</h4>
      <div className="info">
        <h4>
          {props.height} " / {props.width} "{" "}
        </h4>
        <h5>${props.price}</h5>

        <div className="painting-buttons">
          <button className="btn btn-primary">Share</button>
          <button
            onClick={() => {
              if (cartItems.length > 0) {
                cartItems.map((item) =>
                  item.id === props.id
                    ? removeCartItem(props.id)
                    : addCartItem("painting", props.id)
                );
              } else {
                addCartItem("painting", props.id);
                setAdded(true);
              }

              checkAdded();
            }}
            className="btn btn-primary"
          >
            {added ? "remove" : "add"}
          </button>
          <button className="btn btn-primary">Like</button>
        </div>
      </div>
    </div>
  );
};

export default Painting;
