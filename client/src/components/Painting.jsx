import React from "react";

const Painting = (props) => {
  return (
    <div className="painting">
      <div>
        <img src={props.img_url} />
      </div>
      <h7 id="painting-title">{props.title}</h7>
      <div className="info">
        <h7>
          {props.height} " / {props.width} "{" "}
        </h7>
        <h5>${props.price}</h5>

        <div className="painting-buttons">
          <button>Share</button>
          <button>Add to Cart</button>
          <button>Like</button>
        </div>
      </div>
    </div>
  );
};

export default Painting;
