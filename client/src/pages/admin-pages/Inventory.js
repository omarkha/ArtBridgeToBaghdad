import React, { useState } from "react";
import Painting from "../../components/Painting";

const Inventory = () => {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [price, setPrice] = useState();

    return (
        <div className="page">
            <div className="container-inventory">
                <section className="input-area">
                    <div>
                        <label>height</label>
                        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div>
                        <label>width</label>
                        <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
                    </div>
                    <div>
                        <label>price</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="imagepicker">
                        <input type="file" id="imagepicker" />
                        <label for="imagepicker">Choose an Image</label>
                    </div>
                    <div className="input-area-buttons">
                        <button id="add-button">Add</button>
                        <button id="delete-button">Delete</button>
                        <button id="update-button">Update</button>
                        <button id="search-button">Search</button>
                    </div>
                </section>
                <section className="results-area">
                    <div className="invenrtory-area">
                        <Painting width={width} height={height} price={price} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Inventory;