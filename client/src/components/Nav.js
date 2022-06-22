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
import { Navbar } from "react-bootstrap";
import Images from "../images/index";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const Nav = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="sm" size="sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="icon" src={Images.logo} />
          Art Bridge to Baghdad
        </Link>

        <NavbarToggle />

        <Navbar.Collapse>
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
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Nav;
