import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const SelectedPainting = (props) => {
  const removeItem = () => {
    props.removeItem(props.id);
  };
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
      <img src={props.img_url} />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.dimensions}</li>
        <li className="list-group-item">{"$" + props.price}</li>
      </ul>
    </div>
  );
};

export default SelectedPainting;
