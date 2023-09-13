import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import ud from "../../images/blogs/u1.png";
import um from "../../images/blogs/u2.png";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="udmey"
            title="Udemy Course"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Ar.Mohd Arif"
                    date="June 12 2022"
                    image={ud}
                    title="Color theory"
                    description="This course covers various aspects of Colors: we discuss the Hue, chroma, and value. We also discuss the Hue, tints, tone, and shades."
                    
                />
                <BlogCard
                    user="Ar.Mohd Arif"
                    date="July 10 2022"
                    image={um}
                    title="Colors in Interior Design"
                    description="This course covers the various aspect of colors and their significance in interior design. We also discuss Interior consideration in color design. Further, in which, we will discuss more elaborately "
                
                />
                
            </div>
        </Section>
    );
};

export default Blogs;
