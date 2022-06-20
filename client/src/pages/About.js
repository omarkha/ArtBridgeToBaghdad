import React from "react";
import Images from "../images";

const About = () => {
  return (
    <div className="page">
      <div className="about-page">
        <article className="about-intro">
          <div>
            <img src={Images.painting_3} />
            <img src={Images.painting_5} />
            <img src={Images.painting_2} />
          </div>
          <h3>
            Hi there, I am Amal Maseer, owner of the Art Bridge to Baghdad
            gallery
          </h3>

          <p>
            I was born in 1962, in Baghdad, Iraq. Growing up, I loved art in
            general. I painted well over 2000 pieces through out my career as an
            artist and I learned how to paint with the instructions of infamous
            Iraqi artist Hafidh Al Douroubi. My main themes are those that
            capture life in Iraq throughout the ages. During the 80s, I drew a
            portrait for former President of Iraq, Saddam Hussein. Saddam liked
            my portrait and met with me in the presidential palace to thank me.
            Then he decided to hang up the portrait in one of Baghdad's historic
            squares.{" "}
          </p>
        </article>
        <article className="about-teaching">
          <img src={Images.teaching_2} />
          <h3> Former High School Teacher </h3>
          <p>
            {" "}
            During the 80s, I was a High School teacher for a Baghdad High
            School. Preparing students for college.
          </p>
        </article>
        <article className="about-restaurant">
          <img src={Images.food} />
          <h3>Former Owner of Amal's Cuisine</h3>
          <p>
            As well as being an artist, I am a reporter, political and social
            activist as well as a businesswoman. I owned a restaurant in the
            town of New Paltz, NY called Amal's Authentic Middle Eastern
            Cuisine. It was a restaurant as well as an art gallery, serving
            Middle Eastern food and we had people coming over from different
            states to eat! Unfortunately, we had to close it down. It was a bit
            disapointing and I miss cooking food for all the amazing friends who
            came to eat there.
          </p>
        </article>

        <article className="about-cafe">
          <img src={Images.net_cafe} />
          <h3> My Internet Cafe in Baghdad </h3>
          <p>
            In 2007, I along with my nephew and another partner opened up an
            Internet Cafe in the city of baghdad.
          </p>
        </article>

        <article>
          <img src={Images.surgeon} />
          <h3> Working with NGOs </h3>
          <p>
            {" "}
            I was working with Doctors Without Borders non-governmental
            organization. Our mission was to treat injured Iraqi civilians.
          </p>
        </article>

        <article>
          <h3>Articles and News Pieces</h3>
          <p>
            I would like to give special thanks to all the amazing friends who
            supported me through out the past 3 decades since when I was in
            Baghdad to my time in the U.S. and thanks also to my son Omar for
            designing this website :D
          </p>
          <a href="https://www.recordonline.com/story/news/2009/02/20/ulster-women-to-welcome-iraqi/52091714007/">
            Ulster women to welcome Iraqi family
          </a>
          <br />
          <a href="https://www.dailyfreeman.com/2011/04/11/the-art-of-friendship-iraqi-artist-has-found-sanctuary-and-more-in-new-paltz-video/">
            THE ART OF FRIENDSHIP: Iraqi artist has found sanctuary, and more,
            in New Paltz (video)
          </a>
        </article>
      </div>
    </div>
  );
};

export default About;
