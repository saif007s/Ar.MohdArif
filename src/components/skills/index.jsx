import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import ArifAbout from "../../images/arifabout.png";
import Section from "../shared/section";
import Resume from "../../download/Myresume.pdf";


import "./style.scss";

const About = () => {
    return (
        <Section
            background="dark"
            id="about"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={ArifAbout}
                        alt="AboutImg"
                    />
                </div>
                <div className="right-col">
                    <h2>About</h2>
                    <p>
                        Hello I am Ar.Mohd Arif, an architect with a passion for creating spaces that blend 
                        functionality, aesthetics, and sustainability. With 1 of experience in 
                        the field of architecture, I have had the privilege of working on a wide range 
                        of projects that have allowed me to explore my creativity and contribute to the 
                        built environment.
                        
                        Proficient in industry-standard software like AutoCAD, SketchUp, and Revit, I 
                        effectively communicate ideas with clients and collaborators. Sustainability 
                        is a core tenet of my work, ensuring projects meet current needs while minimizing
                        environmental impact.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default About;
