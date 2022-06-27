import React from "react";
import Painting from "../components/Painting";
import Images from "../images";

const desc =
  "A piece that I drew in 2007. It resembles the hardships of life in old Iraq.";

const Antiques = () => {
  return (
    <div className="container">
      <div className="results-heading">
        <h3>Scroll Down for Our inventory</h3>
      </div>
      <div className="results"></div>
      <div className="results-bottom">
        <button>{"<="}</button>
        <button>{"=>"}</button>
      </div>
    </div>
  );
};

export default Antiques;
