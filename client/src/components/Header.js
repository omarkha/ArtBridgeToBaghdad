import React from "react";
import Images from "../images/index";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Header = () => {
  return (
    <header>
      <div className="jumbotron text-left">
        <h1 className="display-4">The Art Bridge To Baghdad</h1>
        <p className="lead">Authentic Mesopotamian Artwork Gallery</p>
        <p>
          {" "}
          founded by <br /> Iraqi artist Amal Maseer
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/about" role="button">
            About Me
          </Link>
        </p>{" "}
        <div className="extra-info">
          <h3>Welcome!</h3>
          <p>
            Dear visitors, we at last, announce the launch of the Art Bridge!
            thanks for your visit and happy browsing!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
