import React from "react";
import Images from "../images/index";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  return (
    <header>
      <div className="jumbotron text-left">
        <h1 className="display-4">The Art Bridge To Baghdad</h1>
        <div className="jumbo-content">
          <p className="lead">Mesopotamian Artwork Gallery</p>
          <p>
            {" "}
            founded by <br /> Iraqi artist Amal Maseer
          </p>
          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="/about" role="button">
              About Me
            </Link>
          </p>{" "}
        </div>

        <div className="extra-info">
          <h3>Welcome!</h3>
          <hr />
          <p>
            At last, I announce the launch of the Art Bridge to Baghdad Gallery!
            thanks for your visit and happy browsing!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
