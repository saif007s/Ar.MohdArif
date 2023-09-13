import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Revit",
        tags: ["revit"],
        media: {
            thumbnail: require("../../images/portfolio/revit.png"),
           
        },
    },
    {
        id: 2,
        name: "AutoCAD",
        tags: ["AutoCAD"],
        media: {
            thumbnail: require("../../images/portfolio/auto.png"),
        },
    },
    {
        id: 3,
        name: "SketChup",
        tags: ["SketChup"],
        media: {
            thumbnail: require("../../images/portfolio/sketchup.png"),
        },
    },
    {
        id: 4,
        name: "Adobe Photoshop",
        tags: ["Adobe Photoshop"],
        media: {
            thumbnail: require("../../images/portfolio/ph.png"),
        },
    },
    {
        id: 5,
        name: "MS Office",
        tags: ["MS office"],
        media: {
            thumbnail: require("../../images/portfolio/office.png"),
        },
    },
    {
        id: 6,
        name: "V-ray",
        tags: ["V-ray"],
        media: {
            thumbnail: require("../../images/portfolio/vray.png"),
        },
    },
    {
        id: 7,
        name: "Adobe Lightroom",
        tags: ["Adobe Lightroom"],
        media: {
            thumbnail: require("../../images/portfolio/lider.png"),
        },
    },
    {
        id: 8,
        name: "Adobe Illustrator",
        tags: ["Adobe Illustrator"],
        media: {
            thumbnail: require("../../images/portfolio/id.png"),
        },
    },
];

const Skills = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="skill"
            title="Skills"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Skills;
