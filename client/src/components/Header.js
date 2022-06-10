import React from "react";
import Images from "../images/index";

const Header = () => {

    return (
        <header>
            <div className="header">

            
            <div className="artist">
            <div className="img">
                <img src={Images.amals_image} />
            </div>
            <div className="name">
                <h3>Amal Maseer</h3>
            </div>
            </div>
            
            <div className="title">
            <h1>Art Bridge To Baghdad</h1>
            <h3 id="subhead"> Mesopotamian Art Gallery </h3>
            </div>

          </div>  
            
          
        </header>
    )
}

export default Header;