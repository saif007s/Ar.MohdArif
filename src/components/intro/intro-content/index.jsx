import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import arif from "../../../images/arif.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Ar.Mohd Arif</span>
                    </h1>
                    <p className="title">
                        Ever since I was young, I have admired intricate buildings
                        and Structures. I have done lots of research an architecture,
                        and what it takes to become an architect. I am naturally drwan
                        to this career because it requires lots of creativity and an 
                        eye for design.
                    </p>
                    
                </div>
                <div className="right-col">
                    <img
                        src={arif}
                        alt="arif"
                    />

                   
                    </div>
                </div>
            </div>
        
    );
};

export default IntroContent;
