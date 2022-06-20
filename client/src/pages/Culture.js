import React from "react";
import Images from "../images/index";

const Culture = () => {
  return (
    <div className="page" id="culture-page">
      <article>
        <h3> Traditional and Pop Music </h3>
        <h5> Traditional Iraqi Music </h5>
        <iframe
          src="https://open.spotify.com/embed/playlist/67F0CefKs5DxQBNGegN4lD?utm_source=generator&theme=0"
          width="62%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </article>

      <article className="culture-images">
        <img src={Images.painting_3} />

        <img src={Images.painting_4} />

        <img src={Images.painting_2} />
      </article>
    </div>
  );
};

export default Culture;
