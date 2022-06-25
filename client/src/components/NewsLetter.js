import React from "react";

const NewsLetter = () => {
  const subscribe = () => {};
  return (
    <div className="newsletter">
      <h1>Subscribe to our News Letter</h1>
      <h4>and get updated with the hottest new pieces we add!</h4>
      <div className="fields">
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="..." />
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="..." />
        </div>
        <button onClick={() => subscribe()}>Subscribe</button>
      </div>
    </div>
  );
};
export default NewsLetter;
