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
    addCartItem(
      "painting",
      props.id,
      props.img_url,
      props.price,
      props.width,
      props.height
    );
    setAdded(true);
  };

  useEffect(() => checkAdded(), []);

  const addButtonStyle = added ? "btn btn-danger" : "btn btn-success";
  return (
    <div className="painting bg-dark col-md-4">
      <div>
        <img
          src={props.img_url}
          onClick={() => props.onEnlarge(props.img_url)}
          data-bs-toggle="modal"
          data-bs-target="#reg-modal"
        />
      </div>
      <h4 id="painting-title text-light">{props.title}</h4>
      <div className="info text-light">
        <h4>
          {props.width} " / {props.height} "{" "}
        </h4>
        <h5 className="text-light">${props.price}</h5>

        <div className="painting-buttons">
          <button className="btn btn-primary text-light">
            <FaShareAlt />
          </button>

          <button
            className="btn btn-primary text-light"
            onClick={() => printCartItems()}
          >
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
