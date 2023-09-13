import React from "react";

import "./app.scss";

import Reseach from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import About from "./components/skills";
import Experience from "./components/Experience";
import Education from './components/Education'
import Udemy from "./components/udmey"
import Skills from './components/set'



const App = () => {
    return (
        <div>
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
            <Reseach />
            <Udemy />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
