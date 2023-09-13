import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import rs from "../../images/blogs/r1.jpg";
import rp from "../../images/blogs/r2.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="res"
            title="Research Paper"
            background="light"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Ar.Mohd Arif"
                    date="Nov 8 2021"
                    image={rs}
                    title="GIS FOR GOVERNANCE IN TOWN PLANNING AND LAND MANAGEMENT"
                    description="For an adequately planned urbanization of a city like Gandhinagar."
                    
                />
                <BlogCard
                    user="Ar.Mohd Arif"
                    date="Nov 8 2021"
                    image={rp}
                    title="REINVENTING THE MOSQUE ARCHITECTURE IN THE INDIAN CONTEXT"
                    description="According to the traditional definition, a mosque is just a place of prayer for Muslims."
                
                />
                
            </div>
        </Section>
    );
};

export default Blogs;
