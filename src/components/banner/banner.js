import React from 'react';
import './banner.css';
import Typed from 'react-typed';
const banner = () => {
    return (
        <div className="banner">
            <img src="banner2.jpg"></img>
            <div className="intro">
           
            <Typed
             className="intro-typed"
             strings = {["I'm Front-End Developer"]}
             typeSpeed={40}
             backSpeed={60}
             loop
            />
            </div>
            <button className="btn btn-download">Download CV</button>
        </div>
    )
}

export default banner
