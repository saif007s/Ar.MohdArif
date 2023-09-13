import React from "react";
import {
   
    FaLinkedinIn,
    FaFacebook,
    FaResearchgate,
    FaUber,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/foot.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="arif"
                    />
                </div>
                
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skill")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("res")}
                    >
                       Research Paper
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("udmey")}
                    >
                        Udemy Course
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#1877F2"
                        icon={<FaFacebook />}
                        link="https://m.facebook.com/Arif980/"
                    />
                    <SocialIcon
                        color="#A435F0"
                        icon={<FaUber />}
                        link="https://www.udemy.com/user/mohd-arif-163/"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/ar-mohd-arif-3b99b7162"
                    />
                    <SocialIcon
                        color="#90EE90"
                        icon={<FaResearchgate />}
                        link="https://www.researchgate.net/profile/Ar-Arif"
                    />
                    <SocialIcon
                        color="#d62976"
                        icon={<FaInstagram />}
                        link="https://instagram.com/mohdarif980?igshid=MzRlODBiNWFlZA=="
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Design & Develop By Saif Ahmad | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
