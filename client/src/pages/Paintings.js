import React from "react";
import Painting from "../components/Painting";
import Images from "../images";

const desc = "A piece that I drew in 2007. It resembles the hardships of life in old Iraq.";

const Paintings = () => {
    return (
        <div className="page">
            <div className="results-heading">
                <h3>Scroll Down for Our inventory</h3>
            </div>
            <div className="results">
                <Painting price="$334.99" title="Hardship" dimensions=' 24" / 30" ' img_url={Images.painting_1} description={desc} />
                <Painting price="$379.99" title="Hardship" dimensions=' 34" / 41" ' img_url={Images.painting_1} description={desc} />
                <Painting price="$149.99" title="Hardship" dimensions=' 26" / 25" ' img_url={Images.painting_1} description={desc} />
                <Painting price="$224.99" title="Hardship" dimensions=' 22" / 30" ' img_url={Images.painting_1} description={desc} />
                <Painting price="$349.99" title="Hardship" dimensions=' 41" / 31" ' img_url={Images.painting_1} description={desc} />
                <Painting price="$349.99" title="Hardship" dimensions=' 22" / 33" ' img_url={Images.painting_1} description={desc} />
            </div>
            <div className="results-bottom">
                <button>{'<='}</button>
                <button>{'=>'}</button>
            </div>
        </div>
    )
}

export default Paintings;