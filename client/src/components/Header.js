import React from "react";
import Images from "../images/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="jumbotron">
        <h1 className="display-4">The Art Bridge To Baghdad</h1>
        <p className="lead">Authentic Mesopotamian Artwork Gallery</p>
        <hr className="my-4" />
        <p> Welcome to the official Art Gallery of Iraqi artist Amal Maseer</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/about" role="button">
            About Me
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
