import React from "react";
import Images from "../images";
import { Parallax, ParallaxLayer } from "react-parallax";

const About = () => {
  return (
    <div>
      <Parallax blur={14} strength={-200} bgImage={Images.painting}>
        <div className="about-page py-5">
          <div className="container">
            <article className="about-intro">
              <div>
                <img src={Images.painting_3} />
                <img src={Images.painting_5} />
                <img src={Images.painting_2} />
              </div>
              <h3 className="text-light text-shadow">
                Hi there, I am Amal Maseer, owner of the Art Bridge to Baghdad
                gallery
              </h3>

              <p className="text-light ts-sm text-shadow">
                From a young age, I realized that I could draw rather well and
                so I pursued drawing and aimed to develop as an artist.
                Fortunately for me, I found one of the best mentors one could -
                The infamous Iraqi artist Hafidh Al Douroubi. He supervised as I
                drew and taught me so much. The main themes I like to employ are
                those that capture life in Iraq throughout the ages, modesty and
                nostolgia. During the 80s, I drew a portrait for former
                President of Iraq, Saddam Hussein. Saddam liked my portrait and
                met with me in the presidential palace to thank me. Then he
                decided to hang up the portrait in one of Baghdad's historic
                squares.
              </p>
            </article>
          </div>
        </div>
      </Parallax>
      <Parallax blur={14} strength={100} bgImage={Images.teaching_2}>
        <div className="about-page py-5">
          <div className="container">
            <article className="about-teaching">
              <img src={Images.teaching_2} />
              <h3 className="text-light text-shadowt">
                {" "}
                Former High School Teacher{" "}
              </h3>
              <p className="text-light text-shadow">
                {" "}
                During the 80s, I taught in many different High Schools across
                Iraq; Preparing young students for success in college. I taught
                many different subjects; Mainly, economics, algebra,
                mathmetatics, marketing and more subjects.
              </p>
            </article>
          </div>
        </div>
      </Parallax>
      <Parallax blur={14} strength={162} bgImage={Images.food}>
        <div className="about-page py-5">
          <div className="container">
            <article className="about-restaurant">
              <img src={Images.food} />
              <h3 className="text-light text-shadow">
                Former Owner of Amal's Cuisine
              </h3>
              <p className="text-light text-shadow">
                As well as being an artist, I am a reporter, political and
                social activist as well as a businesswoman. I owned a restaurant
                in the town of New Paltz, NY called Amal's Authentic Middle
                Eastern Cuisine. It was a restaurant as well as an art gallery,
                serving Middle Eastern food and we had people coming over from
                different states to eat! Unfortunately, we had to close it down.
                It was a bit disapointing and I miss cooking food for all the
                amazing friends who came to eat there.
              </p>
            </article>
          </div>
        </div>
      </Parallax>
      <Parallax blur={14} strength={262} bgImage={Images.net_cafe}>
        <div className="about-page py-5">
          <div className="container">
            <article className="about-cafe">
              <img src={Images.net_cafe} />
              <h3 className="text-light text-shadow">
                {" "}
                My Internet Cafe in Baghdad{" "}
              </h3>
              <p className="text-light text-shadow">
                In 2007, I along with my nephew and another partner opened up an
                Internet Cafe in the city of baghdad.
              </p>
            </article>
          </div>
        </div>
      </Parallax>

      <Parallax blur={14} strength={362} bgImage={Images.surgeon}>
        <div className="about-page py-5">
          <div className="container">
            <article>
              <img src={Images.surgeon} />
              <h3 className="text-light text-shadow"> Working with NGOs </h3>
              <p className="text-light text-shadow">
                {" "}
                I worked with Doctors Without Borders - a non-governmental
                organization. Our mission was to treat injured Iraqi civilians.
                I also worked with other humanitarian organizations during my
                stay in the Middle East.
              </p>
            </article>
          </div>
        </div>
      </Parallax>

      <Parallax blur={14} strength={100} bgImage={Images.baghdad}>
        <div className="about=page py-5">
          <div className="container">
            <article>
              <h3 className="text-light text-shadow">
                Articles and News Pieces
              </h3>
              <p className="text-light text-shadow">
                I would like to give special thanks to all the amazing friends
                who supported me through out the past 3 decades since when I was
                in Baghdad to my time in the U.S. and thanks also to my son Omar
                for designing this website :D
              </p>
              <a href="https://www.recordonline.com/story/news/2009/02/20/ulster-women-to-welcome-iraqi/52091714007/">
                Ulster women to welcome Iraqi family
              </a>
              <br />
              <a href="https://www.dailyfreeman.com/2011/04/11/the-art-of-friendship-iraqi-artist-has-found-sanctuary-and-more-in-new-paltz-video/">
                THE ART OF FRIENDSHIP: Iraqi artist has found sanctuary, and
                more, in New Paltz (video)
              </a>
            </article>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
