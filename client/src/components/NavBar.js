import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
import {BsBookFill} from 'react-icons/bs'
import {RiContactsFill} from 'react-icons/ri'
import {TiHeart} from 'react-icons/ti'
import {AiFillStar} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {BsCartCheckFill} from 'react-icons/bs'

const NavBar = () => {

    return (
        <nav>
            <ul className="nav-1">
                <li><Link className="link" to="/"><FaHome /> Home</Link></li>
                <li><Link className="link" to="about"><BsBookFill /> About</Link></li>
                <li><Link className="link" to="contact"><RiContactsFill /> Contact</Link></li>
                <li><Link className="link" to="paintings"><TiHeart /> Paintings</Link></li>
                <li><Link className="link" to="antiques"><AiFillStar /> Antiques</Link></li>
            </ul>
            <ul className="nav-2">
                <li>
                    <Link className="link" to="cart"> 
                        <BsCartCheckFill size="21px" className="cart"/>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="account">
                        <MdAccountCircle size="21px" className="account"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;