import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const SelectedPainting = (props) => {
  return (
    <div className="selected-painting" id={props.id} key={props.id}>
      <button>
        <TiDeleteOutline className="icon" />
      </button>
      <img src={props.img_url} />
      <h3>{props.dimensions}</h3>
      <h3>{"$" + props.price}</h3>
    </div>
  );
};

export default SelectedPainting;
