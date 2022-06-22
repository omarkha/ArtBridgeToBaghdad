import React from "react";
import Header from "../components/Header";
import Images from "../images";
import NewsLetter from "../components/NewsLetter";
import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="home-page">
        <article className="main-article">
          <h3 className="h3">
            <br />
            Now Online, The Art Bridge to Baghdad to enrich Your Life With
            Mesopotamian Art!
          </h3>

          <div className="div-1">
            <p>
              Iraq has risen from the ashes. Once, The Cradle of Civilization,
              Iraq had been torn by wars in the past 4 decades. But, with the
              defeat of ISIS in Iraq on the hands of the Iraqi Army, security
              levels have gotten to be better than ever before; Even safer than
              countries in South America.
              <br />
            </p>
          </div>
          <img src={Images.painting_4} />
          <img src={Images.painting_2} />
          <div className="div-2">
            <p>
              <br />
              Tourists have been flocking to Iraq in recent years, walking in
              the streets of Baghdad feeling safe and welcomed by Iraqis! It's a
              land of great cultural and ethnic diversity, long history, and
              strategic location. From Babylon to Summeria to the Ottoman
              Empire, Mesopotamia is, undoubtedly, one of the world's richest
              countries in culture!
            </p>
          </div>

          <div className="div-3">
            <p>
              Hi there, and welcome to my gallery! I'm Amal Maseer, owner of the
              Art Bridge to Baghdad gallery. I would love to share with you the
              beauty of Mesopotamia captured by the eyes of an Iraqi woman.
            </p>
          </div>
          <img src={Images.amal_image} />
          <img src={Images.painting_4} />
          <div className="div-4">
            <p>
              I learned to paint under the mentorship of Hafidh Al Doroubi, who
              was mentored by Silvador. International and local Iraqi press
              repeatedly featured my paintings since the 80s and to this
              day.Former President of Iraq, Saddam Hussein had seen and liked a
              portrait I made of him so much he personally met with me and
              decided to hang the portrait up in one of Baghdad's squares.
            </p>
          </div>
        </article>

        <article>
          <NewsLetter />
        </article>
      </div>
    </div>
  );
};

export default Home;
