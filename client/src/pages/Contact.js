import React from "react";
import Images from "../images";

const Contact = () => {
    return (
        <div className="page">
            
            <section className="contact-section">

            <div  className="contact" id="contact-info">
                <h3>Contact Info:</h3>
                <div>
                    <img />
                    <p>
                        Email: amal4ch@gmail.com
                        < br />< br />
                        Phone: 845 - 616 - 7364
                    </p>
                </div>
            </div>
            
            <div  className="contact">
                <h3>Linkedin</h3>
                <div>
                    <img src={Images.linkedin_icon} />
                    <p>
                        Connect with me on Linkedin!
                    </p>
                </div>
            </div>

            <div  className="contact">
                <h3>Facebook</h3>
                <div>
                    <img src={Images.facebook_icon} />
                    <p>
                        My facebook page!
                    </p>
                </div>
            </div>

            <div  className="contact">
                <h3>Instagram</h3>
                <div>
                    <img src={Images.instagram_icon} />
                    <p>
                        Follow me on Instagram!
                    </p>
                </div>
            </div>

            <div  className="contact">
                <h3>Twitter</h3>
                <div>
                    <img src={Images.twitter_icon} />
                    <p>
                        My tweets on Twitter!
                    </p>
                </div>
            </div>

            </section>
        </div>
    )
}

export default Contact;