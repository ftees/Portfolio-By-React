import React from 'react';
import './banner.css';
import Typed from 'react-typed';
const banner = () => {
    return (
        <div className="banner">
            <img src="banner3.jpg"></img>
            <div className="intro">
           
            <Typed
             className="intro-typed"
             strings = {["I'm Front-End Developer"]}
             typeSpeed={40}
             backSpeed={60}
             loop
            />
            </div>
            
        </div>
    )
}

export default banner
