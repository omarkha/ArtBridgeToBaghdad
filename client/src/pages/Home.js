import React from "react";
import Images from "../images";
import NewsLetter from "../components/NewsLetter";
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
            <img id="logoimg" src={logo2} />
            <h3 className="display-6 text-dark mb-0">
              Exotic Paintings
              <br />
              From Mespotamia
            </h3>
          </div>
          <div className="heading-imgs">
            <img id="dimage" src={displayimage} alt="display image" />

            <div className="text-center pt-3 mt-3">
              <p className="py-3">
                <Link
                  className="btn-slide py-3 px-5 my-3 h5"
                  to="/paintings"
                  role="button"
                >
                  View Artwork
                </Link>
              </p>
              <h6 className="h5 text-dark mt-3 py-1">
                by Traditional Iraqi Artist, <br /> Amal Maseer
              </h6>
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
                  <h5 className="mb-5"> The Land Where History Began </h5>
                  <img
                    className="col-md-4"
                    id="cradle_img"
                    src={Images.baghdad_16}
                  />
                  <p>
                    Everywhere in the world, teachers tell their students about
                    the land between the two rivers. Mesopotamia, a land that
                    hosted some of the world's earliest civilizations such as
                    Babylon, Sumeria, and Assyria. But little is shown in the
                    media about Aladdin's homeland.
                    <br />
                    <br />
                    Because of its strategic location, being in the middle of
                    the map, Iraq has been a meltingpot of cultures and ethnic
                    groups.
                    <br />
                    <br />
                    My paintings capture for you a rare glimpse of you'd find
                    when you travel to Iraq, and visit the UNESCO Heritage Site
                    of the Mesopotamian marshes during past times.
                    <br />
                    <br />
                    Besides some amazing, exotic landscapes all throughout
                    Mesopotamia, as you visit Iraq, you get to meet a variety of
                    ethnic and religious groups, such as the Armenians, Turkmen,
                    Persians, Kurds, Yazidis, Arabs, and Circassians. <br />
                    <br />I hope, with my paintings, to give you a glimpse into
                    the history of an intriguing place on earth and to expand
                    the horizons of your spiritual awareness.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="my-5 parag">
                <div data-aos="fade-left" className="mt-5 px-5">
                  <h5 className="mb-5"> Diversity at Its Prime </h5>
                  <img className="col-md-4" src={Images.painting_2} />
                  <img className="col-md-4" src={Images.painting_4} />
                  <img className="col-md-4" src={Images.painting_3} />

                  <p>
                    <br />
                    As safety miraculously returned to Iraq thanks to the
                    sacrifices of the sons of Mespotamia, so did tourism.
                    <br />
                    <br />
                    From all across the world, tourists come to see the world's
                    oldest country and what it has to offer.
                    <br />
                    <br />
                    YouTube vloggers who travel the world describe their
                    appreciation of the Iraqi people's hospitality and
                    generosity. Even big figures stop by cafes in Baghdad and
                    Basra to chat with locals such as Jesus Casas the Spanish
                    coach of the Iraqi National Soccer Team along with the many
                    foreign ambassadors in Iraq.
                    <br />
                    <br />
                    Mesopotamia enjoys a great deal of cultural and ethnic
                    diversity, a long history, and a centric location both
                    geographically and historically. From the time of
                    Babylonians, Summerians and Assyrians to the conquests of
                    the Ottoman and Persian Empires, Iraq brings together Asian,
                    European and Middle Easter cultures. Making it an attraction
                    for the sophisticated and well-educated.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="my-5 parag">
                <div data-aos="fade-right" className=" mt-5 px-5">
                  <img
                    id="amalsphoto"
                    className="col-md-4"
                    src={Images.amal_image}
                  />
                  <div className="col-md-8 mt-5" style={{ margin: "0 auto" }}>
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
                  <h5>
                    A Former Student of Renowned Iraqi Artist, Hafidh Al Doroubi
                  </h5>
                  <p>
                    A student of the infamous Iraqi artist Hafidh Al Doroubi,
                    who learned his craft under the mentorship of Spanish artist
                    Salvador Dali. If you don't know Salvador Dali, he himself
                    learned from Picaso.
                    <br />
                    <br />
                    International and local Iraqi press have repeatedly featured
                    me and my paintings since the 80s and to this day. I've also
                    sold many pieces across prominent galleries across the world
                    including SoHo galleries .
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <a
                    hred="https://www.dailyfreeman.com/2011/04/11/the-art-of-friendship-iraqi-artist-has-found-sanctuary-and-more-in-new-paltz-video/"
                    target="_blank"
                  >
                    <img
                      src={dailfreeman}
                      className="mediapic"
                      alt="daily freeman logo"
                    />
                  </a>
                </li>
                <li>
                  <a
                    hred="https://www.dailyfreeman.com/2011/04/11/the-art-of-friendship-iraqi-artist-has-found-sanctuary-and-more-in-new-paltz-video/"
                    target="_blank"
                  >
                    <img
                      src={thelittlerebellion}
                      className="mediapic"
                      alt="the litle rebellion logo"
                    />
                  </a>
                </li>
              </ul>
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
