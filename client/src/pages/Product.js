import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const Product = (props) => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPaintings = async () => {
      const res = await axios.get(
        `https://artbridgetobaghdad.herokuapp.com/api/paintings/${productId}`
      );
      setProduct(res.data.paint);
      setLoading(false);
      console.log(res.data);
      console.log("product id from params: " + productId);
      checkAdded();
    };
    fetchPaintings();
  }, []);

  //cart functions

  const id = productId;

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
      id,
      product.img_url,
      product.price,
      product.width,
      product.height,
      product.title
    );
    setAdded(true);
  };

  useEffect(() => checkAdded(), [cartItems]);

  const addButtonStyle = added ? "btn btn-danger" : "btn btn-success";

  return (
    <div className="productpage">
      <div className="container">
        <section>
          <div>
            <img src={product.img_url} />
          </div>
          <div className="product-info">
            <label>title</label>
            <h4>{product.title ? product.title : "Art Bridge To Baghdad"}</h4>
            <labe>dimensions</labe>
            <h4>
              {product.height} in / {product.width} in
            </h4>
            <labe>price</labe>
            <h4>${product.price}</h4>
            <label>Item ID</label>
            <h6>{product._id}</h6>
            <h3>
              This Item is {product.isSold === true ? "Sold" : "Available!"}
            </h3>
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
        </section>
      </div>
    </div>
  );
};

export default Product;
