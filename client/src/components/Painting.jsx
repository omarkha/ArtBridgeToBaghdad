import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const Painting = (props) => {
  const id = props.id;

  const { cartItems, addCartItem, removeCartItem, printCartItems } =
    useContext(CartContext);
  const [added, setAdded] = useState(false);
  const checkAdded = () => {
    cartItems.map((item) => (item.id === id ? setAdded(true) : ""));
  };

  const removeItem = () => {
    removeCartItem(id);
    setAdded(false);
  };

  const addItem = () => {
    addCartItem("painting", id);
    setAdded(true);
  };

  useEffect(() => checkAdded(), []);

  const addButtonStyle = added ? "btn btn-danger" : "btn btn-success";
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
          <button className="btn btn-primary">
            <FaShareAlt />
          </button>

          <button className="btn btn-primary" onClick={() => printCartItems()}>
            <AiFillLike />
          </button>
          <button
            onClick={() => {
              if (cartItems.length > 0) {
                checkAdded();
                if (!added) {
                  cartItems.map((item) =>
                    item.id === id ? removeItem() : addItem()
                  );
                } else {
                  removeItem();
                }
              } else {
                addItem();
              }
              printCartItems();
            }}
            className={addButtonStyle}
          >
            {added ? "remove" : "add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Painting;
