import React from "react";

const NewsLetter = () => {
  const subscribe = () => {};
  return (
    <div className="newsletter col-md-12 justify-content-center justify-items-center">
      <h1>Subscribe to our News Letter</h1>
      <h4 className="lead">get updated with the hottest new pieces we add!</h4>
      <div className="fields my-4">
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="..." />
        </div>
        <div>
          <label>Email</label>
          <input className="text-input" type="text" placeholder="..." />
        </div>
        <button className="btn btn-primary" onClick={() => subscribe()}>
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default NewsLetter;
