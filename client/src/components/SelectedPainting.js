import React from "react";

const SelectedPainting = (props) => {
  return (
    <div className="selected-painting" id={props.id} key={props.id}>
      <img src={props.img_url} />
      <h3>{props.dimensions}</h3>
      <h3>{"$" + props.price}</h3>
    </div>
  );
};

export default SelectedPainting;
