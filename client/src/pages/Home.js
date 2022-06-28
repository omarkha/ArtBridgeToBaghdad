import React from "react";
import Header from "../components/Header";
import Images from "../images";
import NewsLetter from "../components/NewsLetter";
import Carousel from "../components/Carousel";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Home = () => {
  const carouselImages = [Images.amal_image, Images.amal_image_2];
  return (
    <div className="home">
      <Parallax strength={-300} bgImage={Images.baghdad_8}>
        <div className="header-content">
          <h4 className="lead text-gradient mb-0">
            The Elegance of Paint, The Arabic Way
          </h4>
          <h1 className="display-1 text-gradient-headline">
            Art Bridge To Baghdad
          </h1>
          <h3 className="display-7 text-muted mb-0">Mespotamian Art Gallery</h3>
          <h6 className="lead text-muted mt-5">by Amal Maseer</h6>
          <p className="lead py-3">
            <Link className="btn-slide my-5" to="/about" role="button">
              My Story
            </Link>
          </p>{" "}
        </div>
      </Parallax>

      <Parallax
        blur={{ min: -10, max: 10 }}
        strength={-200}
        bgImage={Images.baghdad_13}
      >
        <div style={{ height: "1597px", margin: "0 auto" }}>
          <div className="container-lg">
            <h3
              style={{ position: "relative", top: "377px" }}
              className="display-1 text-light mt-5 row text-shadow"
            >
              Welcome to The Cradle of Civilization...
            </h3>

            <div
              className="col-md-12 row my-5"
              style={{ position: "relative", top: "610px" }}
            >
              <img
                style={{ width: "62%23w" }}
                className="col-md-4"
                src={Images.amal_image}
              />
              <div className="col-md-8 mt-5 px-5">
                <p className="text-light h2 text-shadow">
                  Welcome to our shop!
                  <br />
                  I'm Amal Maseer, owner of the Art Bridge to Baghdad gallery.
                  Thanks for your visit, Enjoy your time and happy scrolling!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax
        blur={{ min: -5, max: 15 }}
        bgImage={Images.painting}
        strength={-100}
      >
        <div className="home-page my-0">
          <div className="container-lg my-0">
            <section className="main-article row justify-content-center justify-items-center my-0">
              <div className="col-md-12 text-center">
                <h3 className="display-3 text-center mt-5">
                  <br />
                  At Last, I am launching my online store for Mesopotamian
                  artwork!
                </h3>
                <h4 className="lead text-light text-center">
                  if you love art and appreciate different cultures, then we've
                  got some new, exotic paintings for you.
                </h4>
              </div>

              <div className="col-md-12 row my-5">
                <img className="col-md-4" src={Images.painting_4} />
                <div className="col-md-8 mt-5 px-5">
                  <h5> The Cradle of Civilization </h5>
                  <p>
                    Everywhere in the world, kids are taught about Mesopotamia.
                    A land which hosted some of the world's earliest
                    civilizations like Babylon, Summeria and Assyria. Because of
                    it's strategic and central location, Iraq has always been a
                    place where people from different cultures met and melted
                    together and not just because of the temperature. Nope. It
                    might come as a surprise, but Iraq has a lot more sceneric
                    landscapes than deserts. There is the UNESCO Heritage Site
                    of the Mesopotamian marshes in the southern city of Basra.
                    In the North there is the cool and mountaneous region of
                    Iraqi Kurdistan. And There are the Tigris and Euphrates
                    rivers than run across the map. Besides the amazing and
                    exotic landscapes, Iraq is home to a multitude of ethnicies
                    and religious groups.
                  </p>
                </div>
              </div>

              <div className="col-md-12 row my-5">
                <div className="col-md-8 mt-5 px-5">
                  <p>
                    <br />
                    Tourists have been flocking to Iraq in recent years, walking
                    in the streets of Baghdad feeling safe and welcomed by
                    Iraqis! It's a land of great cultural and ethnic diversity,
                    long history, and strategic location. From Babylon to
                    Summeria to the Ottoman Empire, Mesopotamia is, undoubtedly,
                    one of the world's richest countries in culture!
                  </p>
                </div>
                <img className="col-md-4" src={Images.painting_2} />
              </div>

              <div className="col-md-12 row my-5">
                <img className="col-md-4" src={Images.painting_4} />
                <div className="col-md-8 mt-5 px-5">
                  <p>
                    I learned to paint under the mentorship of Hafidh Al
                    Doroubi, who was mentored by Silvador. International and
                    local Iraqi press repeatedly featured my paintings since the
                    80s and to this day.Former President of Iraq, Saddam Hussein
                    had seen and liked a portrait I made of him so much he
                    personally met with me and decided to hang the portrait up
                    in one of Baghdad's squares.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={Images.desert}>
        <section className="row justify-content-center justify-items-center">
          <NewsLetter />
        </section>
      </Parallax>
    </div>
  );
};

export default Home;
