import React from "react";

const Account = () => {
    return (
        <div className="page">
            <form>
                <label> Email: </label>
                <input type="text" />
                <br />
                <label> Password: </label>
                <input type="text" />
                <br />
                <button type="submit"> Login </button>
            </form>
        
        </div>
    )
}

export default Account;