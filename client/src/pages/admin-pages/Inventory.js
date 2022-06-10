import React from "react";

const Inventory = () => {

    return (
        <div className="page">
            <div className="container-inventory">
                <section className="input-area">
                    <div>
                        <label>height</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>width</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea></textarea>
                    </div>
                    <div className="input-area-buttons">
                        <button>Add</button>
                        <button>Delete</button>
                        <button>Update</button>
                        <button>Search</button>
                    </div>
                </section>
                <section className="results-area">
                    <div className="invenrtory-area">

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Inventory;