import React from 'react'
import './project.css'
const project = () => {
    let projects = [
    {
        title: "Portfolio Website with React",
        img: "cv1.jpg",
        link:"https://ftees.github.io/Portfolio-By-React/"
        },
    {
        title: "Weather App with React",
        img: "weather.jpg",
        link:"https://ftees.github.io/Weather-App-by-React/"
        },
        {
            title: "E-Commerce Website with Angular",
            img: "ecm.png",
            link:"https://www.w3schools.com/howto/howto_css_animate_buttons.asp"
            }

    ]
    return (
        <div className="project-contain">
            <h2>Projects</h2>
            <div className="list-projects container">
                {projects.map(item => (
                    <div className="project">
                    <img className="project-background" src={item.img}></img>
                    
                    <h5>{item.title}</h5>
                    <button className="btn-view"><a href={item.link} target="_blank">View</a></button>
                    
                </div>
                ))} 
            </div>
        </div>
    )
}

export default project
