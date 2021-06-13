import React from 'react'
import './skill.css'
import ProgressBar from "@ramonak/react-progress-bar";
const skill = () => {
    let skills = [
      {
        name: "HTML",
        percent: 80,

      },
      {
        name: "CSS",
        percent: 70,

      },
      {
        name: "JavaScript",
        percent: 55,

      },
      {
        name: "Soft Skill",
        percent: 75,

      },
      {
        name: "Office Skill",
        percent: 80,

      },
  ]
    return (
        <div className="skill-contain">
          <div className="format-div skill-content">
            <h2>Skills</h2>
            <div className="list-Skills bg-sub">
              {skills.map(item =>
                  <div className="skill">
                  <h3>{item.name}</h3>
                <div className="skill-bar"><ProgressBar completed={item.percent} bgColor="#1689c7" height={22} isLabelVisible={false}></ProgressBar></div>
                </div>
              )}
             </div>
             </div>
        </div>
    )
}

export default skill
