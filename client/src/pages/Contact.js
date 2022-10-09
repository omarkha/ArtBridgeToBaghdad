import React from "react";
import Images from "../images";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-section">
        <img id="contactpage-banner" src={Images.amals_banner} />
        <div className="contact" id="contact-info">
          <h3>Contact Info:</h3>

          <div>
            <p className="text-dark">
              Email: amal4ch@gmail.com
              <br />
              Phone: 1 (845) 616 - 7364
            </p>
          </div>
        </div>
        <div className="socials">
          <div className="contact">
            <a href="https://www.linkedin.com/in/amal-maseer-790b14a1/">
              <h3>Linkedin</h3>
              <div>
                <img src={Images.linkedin_icon} />
                <p className="text-dark">Connect with me on Linkedin!</p>
              </div>
            </a>
          </div>

          <div className="contact">
            <a href="https://www.facebook.com/amal.maseer">
              <h3>Facebook</h3>
              <div>
                <img src={Images.facebook_icon} />
                <p className="text-dark">My facebook page!</p>
              </div>
            </a>
          </div>

          <div className="contact">
            <h3>Instagram</h3>
            <div>
              <img src={Images.instagram_icon} />
              <p className="text-dark">Follow me on Instagram!</p>
            </div>
          </div>

          <div className="contact">
            <h3>Twitter</h3>
            <div>
              <img src={Images.twitter_icon} />
              <p className="text-dark">My tweets on Twitter!</p>
            </div>
          </div>
        </div>
      </section>
      <secion id="contact">
        <div className="container-lg my-5">
          <div className="text-center">
            <h2>Get in Touch</h2>
            <p className="text-dark">
              Questions to ask? fill out the form to contact me directly
            </p>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-6">
              <form>
                <label for="email" className="form-label">
                  Email Address:
                </label>
                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <MdEmail />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="e.g. Mario@example.com"
                  />
                </div>

                <label for="name" className="form-label">
                  Name:
                </label>

                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <BsFillPersonFill />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="e.g. Mario"
                  />
                </div>

                <label for="subject">What is your question about?</label>
                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <RiMessage2Fill />
                  </span>
                  <select className="form-select" id="subject">
                    <option value="pricing">Pricing</option>
                    <option value="pricing">Content</option>
                    <option value="pricing">Other</option>
                  </select>
                </div>

                <div className="form-floating my-3">
                  <textarea
                    id="query"
                    className="form-control"
                    style={{ height: "144px" }}
                  ></textarea>
                  <label for="query">Your Message...</label>
                </div>
                <div className="my-4 text-center">
                  <button type="submit" className="btn btn-secondary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </secion>
    </div>
  );
};

export default Contact;
