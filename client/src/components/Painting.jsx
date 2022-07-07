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
      props.height,
      props.title
    );
    setAdded(true);
  };

  useEffect(() => checkAdded(), [cartItems]);

  const addButtonStyle = added ? "btn btn-danger" : "btn btn-success";
  return (
    <div className="painting col-md-7" key={props.id}>
      <div>
        <img
          src={props.img_url}
          onClick={() =>
            !props.modal
              ? props.onEnlarge({
                  img_url: props.img_url,
                  title: props.title,
                  price: props.price,
                  width: props.width,
                  height: props.height,
                  id: props.id,
                })
              : null
          }
          data-bs-toggle="modal"
          data-bs-target="#reg-modal"
        />
      </div>
      <div className="info text-dark">
        <h4>
          {props.width} " / {props.height} "{" "}
        </h4>
        <h3 className="lead">{props.title}</h3>
        <h5 className="text-dark">${props.price}</h5>

        <div className="painting-buttons">
          <button
            className="btn btn-primary text-light"
            onClick={() => console.log(props.id)}
          >
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
