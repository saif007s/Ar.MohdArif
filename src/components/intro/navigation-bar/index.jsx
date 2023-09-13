import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="Arif Logo"
                />
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("skill")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("education")}
                >
                    Education   
                </span>
                
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("portfolio")}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("res")}
                >
                    Research Paper
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("udmey")}
                >
                     Udemy Course
                </span>
                <CallToAction
                    text="Contact me"
                    id="navContactMe"
                    action={() => {
                        menuItemClickHandler("contact");
                    }}
                />
            </div>
        </div>
    );
};

export default Navigation;