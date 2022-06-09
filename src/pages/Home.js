import React from "react";
import Header from "../components/Header";
import Images from "../images";


const Home = () => {
    return (
        <div className="home">

            <Header />
            <div className="home-page">

            <article>
            <img src={Images.baghdad} id="home-article-img-1" />
                <div>
                    <h3>Hi there, I'm Amal Maseer, thanks for your visit and welcome!</h3>
                <p>
               The oldest country in the world. I would like to remind people of The Land Between The Two Rivers. Mesopotamia is a country of over 8 thousand years of history. It is a land of scholars, poets and artists.  A land that witnessed the rise and fall of many empires. From Babylon to Summeria to the Ottoman Empire, Mesopotamia is arguably the most culturally rich country in the world!
               <br/><br/>
               As an Iraqi woman who has seen the best and worst of Iraq, I would love to share with you my perspective on Iraq. So, I have, finally, launched my official online store for Mesopotamian artwork. 
               <br/><br/>
               I have been an artist for over 42 years and my artwork have been repeatedly featured in International and local press from the 80s till today. Former President of Iraq, Saddam Hussein had seen and liked a portrait I made of him so much he met with with me and decided to hang my work up in one of Baghdad's squares. You can learn more about me and my story in the 'About' page.
                </p>
                </div>
                
            </article>

            <img src={Images.painting_1} />


        </div>
        </div>
    )
}

export default Home;