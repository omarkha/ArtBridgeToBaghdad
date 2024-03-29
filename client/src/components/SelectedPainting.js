import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import formatProductPrice from "../utils/formatProductPrice";

const SelectedPainting = (props) => {
  const removeItem = () => {
    props.removeItem(props.id);
  };

  const price = formatProductPrice(props.product);
  return (
    <div
      className="card selected-painting"
      style={{ width: 18 + "rem" }}
      id={props.id}
      key={props.id}
    >
      <button onClick={() => removeItem()}>
        <TiDeleteOutline className="icon" />
      </button>
      <div>
        <img src={props.img_url} />
      </div>
      <div>
        <h3 className="h5">{props.title}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {props.width + ' " x ' + props.height + ' " '}
          </li>
          <li className="list-group-item">{price}</li>
        </ul>
      </div>
    </div>
  );
};

export default SelectedPainting;
