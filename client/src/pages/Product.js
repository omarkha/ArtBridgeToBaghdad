import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import toast from "react-hot-toast";
import formatProductPrice from "../utils/formatProductPrice";

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

  const { addItem, removeItem, cartCount, cartDetails, totalPrice, clearCart } =
    useShoppingCart();

  const id = productId;

  const [added, setAdded] = useState(false);
  const checkAdded = () => {
    Object.keys(cartDetails).map((item) =>
      cartDetails[item]._id === id ? setAdded(true) : null
    );
  };

  const removeItemFromCart = () => {
    Object.keys(cartDetails).map((e, i) => {
      if (cartDetails[e]._id === productId) {
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
    setAdded(true);
    addItem(product);
    toast.success(
      product.title
        ? `${product.title} has been Added to Your Cart!`
        : "Item Added to Your Cart!"
    );
  };

  useEffect(() => checkAdded(), [cartDetails]);

  const price = formatProductPrice(product);

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
            <h1 className="h4">
              {product.name ? product.name : "Art Bridge To Baghdad"}
            </h1>
            <label>dimensions</label>
            <h4>
              {product.height} in / {product.width} in
            </h4>
            <label>price</label>
            <h4>{price}</h4>
            <label>Item ID</label>
            <h6>{product._id}</h6>
            <h3>
              This Item is {product.is_sold === true ? "Sold!" : "Available!"}
            </h3>

            {props.is_sold ? (
              "This Item has Been Sold!"
            ) : (
              <div className="painting-buttons">
                <button
                  className="btn btn-primary text-light"
                  onClick={() => console.log(productId)}
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
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
