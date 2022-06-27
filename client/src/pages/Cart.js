import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectedPainting from "../components/SelectedPainting";
import Images from "../images";

const Cart = () => {
  const [selections, setSelections] = useState([
    {
      img_url: Images.painting_2,
      dimensions: '23 " / 34 "',
      price: 199.99,
    },
    {
      img_url: Images.painting_4,
      dimensions: '20 " / 34 "',
      price: 249.99,
    },
    {
      img_url: Images.painting_1,
      dimensions: '20 " / 34 "',
      price: 249.99,
    },
    {
      img_url: Images.painting_5,
      dimensions: '20 " / 34 "',
      price: 249.99,
    },
    {
      img_url: Images.painting,
      dimensions: '32 " / 20 "',
      price: 299.99,
    },
    {
      img_url: Images.painting_2,
      dimensions: '23 " / 34 "',
      price: 199.99,
    },
    {
      img_url: Images.painting_4,
      dimensions: '20 " / 34 "',
      price: 249.99,
    },
    {
      img_url: Images.painting_1,
      dimensions: '20 " / 34 "',
      price: 249.99,
    },
    {
      img_url: Images.painting_5,
      dimensions: '20 " / 34 "',
      price: 249.99,
    },
    {
      img_url: Images.painting,
      dimensions: '32 " / 20 "',
      price: 299.99,
    },
  ]);

  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let prices = [];
    selections.forEach((e, i) => {
      prices.push(e.price);
    });
    console.log(prices);
    let t = 0;
    prices.forEach((e) => {
      t += e;
      setTotal(t);
    });
    console.log(total);
  };

  const printTotal = () => {
    return total;
  };

  useEffect(() => getTotal(), []);
  return (
    <div className="container">
      <div className="cart-view">
        {selections.length > 0 ? (
          selections.map((e, i) => (
            <SelectedPainting
              img_url={e.img_url}
              price={e.price}
              dimensions={e.dimensions}
              id={"painting_" + i}
              key={"painting_" + i}
            />
          ))
        ) : (
          <h1>You have not selected anything yet!</h1>
        )}
      </div>
      <div className="cart-purchase">
        <div className="cart-info">
          <h3>{"You have " + selections.length + "  items selected"}</h3>
          <h3 id="cart-total" onClick={() => getTotal()}>
            {"Your total is $" + Math.floor(printTotal() * 100) / 100}
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
