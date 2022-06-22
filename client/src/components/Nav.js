import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { TiHeart } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.css";
import Images from "../images/index";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="icon" src={Images.logo} />
          Art Bridge to Baghdad
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                <BsBookFill /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                <RiContactsFill /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="paintings">
                <TiHeart /> Paintings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="antiques">
                <AiFillStar /> Antiques
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cart">
                <BsCartCheckFill /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
