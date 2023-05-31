import React from "react";
import Header from "../components/Header";
import Images from "../images";
import NewsLetter from "../components/NewsLetter";
import Carousel from "../components/Carousel";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import displayimage from "../images/displayimage.jpg";
import bgx from "../images/background_x.png";
import bgx2 from "../images/sunbg2.png";
import logo2 from "../images/logo2.png";
import arabknight from "../images/arabknight.png";
import dailfreeman from "../images/daily-freeman.png";
import thelittlerebellion from "../images/thelittlerebellion.png";

const Home = () => {
  const carouselImages = [Images.amal_image, Images.amal_image_2];

  return (
    <div className="home">
      <Parallax
        strength={-200}
        blur={{ min: -9, max: 15 }}
        bgImage={bgx2}
        className="home-hero-background"
      >
        <div className="heading container-lg">
          <div className="heading-content text-center">
            <h1 className="text-gradient-headline">Art Bridge</h1>
            <h1 className="text-gradient-headline">
              <span>To Baghdad</span>
            </h1>

            <h3 className="display-6 text-dark mb-0">
              Mesopotamian Art Gallery
            </h3>
            <h4 className="lead text-dark mb-0 ">
              The Elegance of Simpler Times
            </h4>
            <img id="logoimg" src={logo2} alt="logo" />
          </div>
          <div className="heading-imgs">
            <img id="dimage" src={displayimage} alt="display image" />

            <div className="text-center">
              <h6
                className="h5 text-dark mt-5 bg-light py-1"
                id="galleryfounder"
              >
                by Traditional Iraqi Artist, <br /> Amal Maseer
              </h6>
              <p className="py-3">
                <Link
                  className="btn-slide py-3 px-5 my-5"
                  to="/paintings"
                  role="button"
                >
                  View Gallery
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax
        bgImage={bgx}
        style={{ mixBlendMode: "darken" }}
        strength={-100}
      >
        <div className="home-page my-5">
          <div className="container-lg my-5">
            <section className="main-article row justify-content-center justify-items-center my-0">
              <div className="col-md-12 text-center">
                <h3 className="display-1 text-center my-5 py-5 text-warning">
                  The Art Bridge to Baghdad, Your Bridge to Cultural Enrichment
                </h3>
              </div>

              <div data-aos="fade-in" className="col-md-12 row my-5 parag">
                <div data-aos="fade-up" className="col-md-12 mt-5 px-5">
                  <h5> The Cradle of Civilization </h5>
                  <img
                    className="col-md-4"
                    id="cradle_img"
                    src={Images.baghdad_16}
                  />
                  <p>
                    Everywhere in the world, teachers tell their students about
                    the land between the two rivers. Mesopotamia, a land that
                    hosted some of the world's earliest civilizations such as
                    Babylon, Sumeria, and Assyria.
                    <br />
                    <br />
                    Because of its strategic location, being in the middle of
                    the map, Iraq has been a meltingpot of cultures and ethnic
                    groups.
                    <br />
                    <br />
                    When you travel to Iraq, you might want to visit the UNESCO
                    Heritage Site of the Mesopotamian marshes in the southern
                    city of Basra. In the North, you can enjoy the the cool and
                    mountainous region of Iraqi Kurdistan. Of course, you could
                    walk along Al-Jamhuriya bridge in Baghdad and immerse
                    yourself in the wonderful spirit of the Tigris river. <br />
                    <br />
                    Besides the amazing, exotic landscapes all throughout
                    Mesopotamia, You get to meet a variety of ethnicies and
                    religious groups, such as the Armenians, Turkmen, Persians,
                    Kurds, Yazidis, Arabs, and Circassians. <br />
                    <br />I hope, with my paintings, to give you a glimpse into
                    the history of an intriguing place on earth and to expand
                    the horizons of your spiritual awareness.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="col-md-12 row my-5 parag">
                <div data-aos="fade-left" className="col-md-8 mt-5 px-5">
                  <p>
                    <br />
                    As safety miraculously returned to Iraq thanks to the
                    sacrifices of the sons of Mespotamia, so did tourism.
                    <br />
                    <br />
                    Tourists from across the world come to see the world's
                    oldest country and what it has to offer.
                    <br />
                    <br />
                    YouTube vloggers describe their appreciation at the Iraqi
                    people's hospitality and generosity, as they film their
                    exciting journies, and even foreign figures stop by local
                    cafes and chat with locals such as Jesus Casas the coach of
                    the Iraqi International Soccer Team has done and the many
                    foreign ambassadors in Iraq.
                    <br />
                    <br />
                    Mesopotamia enjoys a great cultural and ethnic diversity, a
                    long history, and a special location. From Babylon to
                    Summeria to the Ottoman Empire, Iraq attracts the
                    sophisticated and well-educated.
                  </p>
                </div>
                <img className="col-md-4" src={Images.painting_2} />
              </div>

              <div data-aos="fade-up" className="col-md-12 row my-5 parag">
                <img className="col-md-4" src={Images.painting_4} />
                <div data-aos="fade-right" className="col-md-8 mt-5 px-5">
                  <p>
                    I hope you have an amazing experience browsing my site!
                    <br />
                    <br />
                    I'm an Iraqi-American artist, born in Baghdad, and I reside
                    in the Hudson Valley area of New York.
                    <br />
                    <br />
                    A student of the infamous Iraqi artist Hafidh Al Doroubi,
                    who learned his craft under the mentorship of Spanish artist
                    Salvador Dali. If you don't know Salvador Dali, he himself
                    recieved his knowledge of art from Picaso.
                    <br />
                    <br />
                    International and local Iraqi press have repeatedly featured
                    me and my paintings since the 80s and to this day. I've also
                    sold many pieces in SoHo galleries.
                    <br />
                    <br />
                    <a
                      hred="https://www.dailyfreeman.com/2011/04/11/the-art-of-friendship-iraqi-artist-has-found-sanctuary-and-more-in-new-paltz-video/"
                      target="_blank"
                    >
                      <img src={dailfreeman} alt="daily freeman logo" />
                    </a>
                    <a
                      hred="https://www.dailyfreeman.com/2011/04/11/the-art-of-friendship-iraqi-artist-has-found-sanctuary-and-more-in-new-paltz-video/"
                      target="_blank"
                    >
                      <img
                        src={thelittlerebellion}
                        style={{ width: "100%", marginTop: "21px" }}
                        alt="the litle rebellion logo"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Parallax>
      <Parallax strength={-200} bgImage={arabknight}>
        <div style={{ height: "1597px", margin: "0 auto" }}>
          <div className="container-lg">
            <h3
              style={{ position: "relative", top: "377px" }}
              className="display-1 text-light mt-5 row text-shadow"
            >
              Arabian Nights
            </h3>

            <div
              data-aos="fade-up"
              className="col-md-12 row my-5 parag"
              style={{ position: "relative", top: "610px" }}
            >
              <img
                id="amalsphoto"
                className="col-md-4"
                src={Images.amal_image}
              />
              <div className="col-md-8 mt-5 px-5">
                <p className="text-dark h2 ">
                  <span className="text-warning text-shadow">
                    Welcome To My Gallery
                  </span>
                  <br />
                  <br />
                  I'm Amal Maseer, the owner of the Art Bridge to Baghdad
                  gallery. Thank you for your visit, and enjoy browsing!
                </p>
                <br />
                <p className="py-3">
                  <Link
                    className="btn-slide text-dark my-5"
                    to="/about"
                    role="button"
                  >
                    Click Her For My Story
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      <section className="newslettersection row justify-content-center justify-items-center">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Home;
