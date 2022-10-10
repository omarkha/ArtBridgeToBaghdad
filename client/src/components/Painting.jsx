import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import toast from "react-hot-toast";
import formatProductPrice from "../utils/formatProductPrice";

const Painting = (props) => {
  const { addItem, removeItem, cartCount, cartDetails, totalPrice, clearCart } =
    useShoppingCart();

  const [product, setProduct] = useState(props.product);

  const id = props.id;

  const [added, setAdded] = useState(false);
  const checkAdded = () => {
    Object.keys(cartDetails).map((item) =>
      cartDetails[item]._id === id ? setAdded(true) : null
    );
  };

  const removeItemFromCart = () => {
    Object.keys(cartDetails).map((e, i) => {
      if (cartDetails[e]._id === props.id) {
        removeItem(cartDetails[e].id);
      }
    });

    setAdded(false);
    toast.success(
      product.title
        ? `${product.title} has been Removed to Your Cart`
        : "Item Removed to Your Cart"
    );
  };

  const addItemToCart = () => {
    console.log(product.price);
    setAdded(true);
    addItem(product);
    toast.success(
      product.title
        ? `${product.title} has been Added to Your Cart!`
        : "Item Added to Your Cart!"
    );
  };

  useEffect(() => {
    checkAdded();
  }, [cartDetails]);

  const price = formatProductPrice(product);

  const addButtonStyle = added ? "btn btn-danger" : "btn btn-success";
  return (
    <div className="painting col-md-7" key={props.id}>
      <div className="img-div">
        <img
          src={product.img_url}
          onClick={() =>
            props.onEnlarge({
              img_url: product.img_url,
              title: product.title,
              price: product.price,
              width: product.width,
              height: product.height,
              id: product.id,
            })
          }
          data-bs-toggle="modal"
          data-bs-target="#reg-modal"
        />
      </div>
      <div className="info text-dark">
        <h4>
          {product.width} " / {product.height} "{" "}
        </h4>
        <h3 className="lead text-dark">{props.title}</h3>
        <h5 className="text-dark">{price}</h5>

        <div className="painting-buttons">
          <button
            className="btn btn-primary text-light"
            onClick={() => console.log(props.id)}
          >
            <FaShareAlt />
          </button>

          <button
            className="btn btn-primary text-light"
            onClick={() => console.log(cartDetails)}
          >
            <AiFillLike />
          </button>
          <button
            onClick={() => {
              if (cartCount > 0) {
                checkAdded();

                if (added) {
                  removeItemFromCart();
                } else {
                  addItemToCart();
                }
              } else {
                addItemToCart();
              }
              console.log(cartDetails);
            }}
            className={addButtonStyle}
          >
            {added ? "remove" : "add to cart"}
          </button>
        </div>
        <Link target="_blank" to={`/products/${props.id}`}>
          See More...
        </Link>
      </div>
    </div>
  );
};

export default Painting;
