import React, { useState } from "react";
import axios from "axios";
const NewsLetter = () => {
  const URI_Atlas = "https://artbridgetobaghdad.herokuapp.com";
  const URI_Local = "http://localhost:5000";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const subscribe = () => {
    const subscriber = {
      name: name,
      email: email,
    };
    axios
      .post(`${URI_Atlas}/api/subscribers`, subscriber)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="newsletter col-md-12 justify-content-center justify-items-center mt-5">
      <h1>Subscribe to our News Letter</h1>
      <h4 className="lead">get updated with the hottest new pieces we add!</h4>
      <div className="fields my-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control text-center"
            placeholder="e.g. Leonardo McCarthy"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="form-control text-center"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="e.g. leonardo@example.com"
          />
        </div>
        <button className="btn btn-primary my-3" onClick={() => subscribe()}>
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default NewsLetter;
