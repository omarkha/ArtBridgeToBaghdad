import React from "react"; 
import { Link } from "react-router-dom";

const ControlPanel = () => {

    return (
        <div className="page">
            <aside>
                <ul>
                    <li>
                       <Link className="link" to="/control-panel/inventory"> Painting Inventory</Link>
                    </li>
                    <li>
                        Antique Inventory
                    </li>
                    <li>
                        Sold Items
                    </li>
                    <li>
                        Messages
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default ControlPanel;