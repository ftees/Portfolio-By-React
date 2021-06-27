import React from "react";
import "./project.css";
const project = () => {
  let projects = [
    {
      title: "Portfolio Website by React",
      img: "cv1.jpg",
      link: "https://ftees.github.io/Portfolio-By-React/",
    },
    {
      title: "Weather App by React",
      img: "weather.jpg",
      link: "https://ftees.github.io/Weather-App-by-React/",
    },
    {
      title: "Movie App by React",
      img: "movie.jpg",
      link: "https://ftees.github.io/Movie-app/",
    },
  ];
  return (
    <div className="project-contain">
      <h2>Projects</h2>
      <div className="list-projects container">
        {projects.map((item) => (
          <div className="project">
            <img className="project-background" src={item.img}></img>

            <h5>{item.title}</h5>
            <button className="btn-view">
              <a href={item.link} target="_blank">
                View
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
