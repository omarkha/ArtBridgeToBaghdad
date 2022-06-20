import React from "react";
import Images from "../images";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-section">
        <img id="contactpage-banner" src={Images.amal_image_2} />
        <div className="contact" id="contact-info">
          <h3>Contact Info:</h3>

          <div>
            <p>
              Email: amal4ch@gmail.com
              <br />
              <br />
              Phone: 845 - 616 - 7364
            </p>
          </div>
        </div>

        <div className="contact">
          <a href="https://www.linkedin.com/in/amal-maseer-790b14a1/">
            <h3>Linkedin</h3>
            <div>
              <img src={Images.linkedin_icon} />
              <p>Connect with me on Linkedin!</p>
            </div>
          </a>
        </div>

        <div className="contact">
          <a href="https://www.facebook.com/amal.maseer">
            <h3>Facebook</h3>
            <div>
              <img src={Images.facebook_icon} />
              <p>My facebook page!</p>
            </div>
          </a>
        </div>

        <div className="contact">
          <h3>Instagram</h3>
          <div>
            <img src={Images.instagram_icon} />
            <p>Follow me on Instagram!</p>
          </div>
        </div>

        <div className="contact">
          <h3>Twitter</h3>
          <div>
            <img src={Images.twitter_icon} />
            <p>My tweets on Twitter!</p>
          </div>
        </div>
        <NewsLetter />
      </section>
    </div>
  );
};

export default Contact;
