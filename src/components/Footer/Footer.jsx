import React from "react";
import "./Footer.css";
import {SlSocialInstagram, SlSocialGithub, SlSocialLinkedin} from "react-icons/sl"

const Footer = () => {
    return(
        <div className="footer bg-dark section-p" id="footer">
            <div className="container">
                <div className="section-title">
                    <h3 className="text-brown">Follow <span className="text-white">Me</span></h3>
                </div>
                <div className="footer-content">
                    <ul className="footer-social-links flex flex-c">
                        <li>
                            <a href="https://www.instagram.com/dev_tonet/" className="text-white">
                            <SlSocialInstagram />
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/tonetlucas" className="text-white">
                            <SlSocialGithub />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/lucas-tonet-52aaa9207/" className="text-white">
                            <SlSocialLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;