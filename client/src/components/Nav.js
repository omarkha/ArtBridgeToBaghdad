import React, { useContext, useState } from "react";
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
import { CartContext } from "../context/cartContext";

const Nav = () => {
  const { cartItems } = useContext(CartContext);

  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0 my-0">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand text-gradient-brandname "
          style={{ fontSize: "18px" }}
        >
          <img className="icon" src={Images.logo} />
          <span className="brandtitle">Art Bridge to Baghdad</span>
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
              <Link
                className="nav-link"
                to="paintings"
                onClick={() => setExpanded(false)}
              >
                My Artwork
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="antiques"
                onClick={() => setExpanded(false)}
              >
                Antiques
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="about"
                onClick={() => setExpanded(!expanded)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="cart-icon nav-link border border-rounded px-3"
                to="cart"
              >
                {cartItems.length + " items in " + " "}
                <BsCartCheckFill style={{ fontSize: "21px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
