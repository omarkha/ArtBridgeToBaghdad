import React from "react";

const NewsLetter = () => {
  const subscribe = () => {};
  return (
    <div className="newsletter">
      <h1>Subscribe to our News Letter!</h1>
      <h4>Sign Up NOW and get updated with the hottest new pieces we add!</h4>
      <div className="fields">
        <div>
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <button onClick={() => subscribe()}>Subscribe</button>
      </div>

      <h4>We won't spam your inbox!</h4>
    </div>
  );
};
export default NewsLetter;
