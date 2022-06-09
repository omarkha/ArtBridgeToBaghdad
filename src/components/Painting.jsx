import React from "react";

const Painting = (props) => {
    return (
        <div className="painting">


                <div>
                <img src={props.img_url} />
            
                </div>

            <div className="info">
            <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
                <h7>{props.dimensions}</h7>
                <h5>{props.price}</h5>
            

            <div className="painting-buttons">
                <button>Add to Cart</button>
                <button>Share</button>
                <button>Like</button>
            </div>
                
                
            </div>    
                
        </div>
    )
}

export default Painting;