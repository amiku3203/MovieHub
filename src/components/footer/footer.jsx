import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
 
import ContentWrapper from "../contentWrapper/ContentWrapper";
 
import "./style.scss";

const Footer = () => {
 

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to MovieHub, a digital haven crafted exclusively for avid movie aficionados like you. Beyond being just a website, MovieHub offers a transformative odyssey, connecting 
                you with your cherished movies in an immersive and effortlessly accessible manner.
                <hr />
                MovieHub transcends being a mere website; it's a voyage into the enchanting realm of cinema. Whether you seek entertainment, inspiration, or the opportunity to relive iconic moments, MovieHub is your compass. Embark on this cinematic adventure today and allow the 
                enchantment of movies to unfurl before your very eyes. Embrace the magic with MovieHub!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/profile.php?id=100032877660990" target="__blank">

                        <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/mr.amit_yes/" target="__blank">

                        <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/AMITKUM64319061" target="__blank">
                        <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/amit-kumar-69535521a/" target="__blank">
                        <FaLinkedin/>
                        </a>
                    
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
