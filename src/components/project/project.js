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
        title: "E-Commerce Website with Angular",
        img: "ecm.png",
        link:"https://angular-first-demo-je45fqz9u-ftees.vercel.app/AngularFirstDemo/home"
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
            <div className="list-projects">
                {projects.map(item => (
                    <div className="project">
                    <img className="project-background" src={item.img}></img>
                    
                    <h4>{item.title}</h4>
                    <button className="btn-view"><a href={item.link} target="_blank">View</a></button>
                    
                </div>
                ))} 
            </div>
        </div>
    )
}

export default project
