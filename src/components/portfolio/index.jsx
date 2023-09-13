import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "School",
        tags: ["Schools"],
        media: {
            thumbnail: require("../../images/portfolio/school.jpg"),
           
        },
    },
    {
        id: 2,
        name: "School",
        tags: ["Schools"],
        media: {
            thumbnail: require("../../images/portfolio/school-1.jpg"),
        },
    },
    {
        id: 3,
        name: "School",
        tags: ["Schools"],
        media: {
            thumbnail: require("../../images/portfolio/school-2.jpg"),
        },
    },
    {
        id: 4,
        name: "Hotels",
        tags: ["Hotels"],
        media: {
            thumbnail: require("../../images/portfolio/hotel.jpg"),
        },
    },
    {
        id: 5,
        name: "Hotels",
        tags: ["Hotels"],
        media: {
            thumbnail: require("../../images/portfolio/hotel-1.jpg"),
        },
    },
    {
        id: 6,
        name: "Shopping Mall",
        tags: ["Shopping Mall"],
        media: {
            thumbnail: require("../../images/portfolio/shoping.jpg"),
        },
    },
    {
        id: 7,
        name: "Shopping Mall",
        tags: ["Shopping Mall"],
        media: {
            thumbnail: require("../../images/portfolio/shoping-2.jpg"),
        },
    },
    {
        id: 8,
        name: "Shopping Mall",
        tags: ["Shopping Mall"],
        media: {
            thumbnail: require("../../images/portfolio/sh.jpg"),
        },
    },
];

const Portfolio = () => {
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
            id="portfolio"
            title="Check My Portfolio"
            background="dark"
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

export default Portfolio;
