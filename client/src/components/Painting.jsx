import React from "react";
import { connect } from "react-redux";

const Painting = (props) => {
  const mapStateToProps = (state) => {
    return {};
  };

  const mapActionsToProps = (dispatch) => {
    return {};
  };

  return (
    <div className="painting">
      <div>
        <img src={props.img_url} />
      </div>

      <div className="info">
        <h7>
          {props.height} " / {props.width} "{" "}
        </h7>
        <h5>${props.price}</h5>

        <div className="painting-buttons">
          <button>Add to Cart</button>
          <button>Share</button>
          <button>Like</button>
        </div>
      </div>
    </div>
  );
};

export default Painting;
