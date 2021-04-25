import React from 'react'
import './skill.css'
import ProgressBar from "@ramonak/react-progress-bar";
const skill = () => {
    return (
        <div className="skill-contain">
            <h2>Skills</h2>
            <div className="list-Skills">
            <div className="skill">
                <h3>HTML</h3>
              <div className="skill-bar"><ProgressBar completed={80} height={22} isLabelVisible={false}>HTML</ProgressBar></div>
             </div>
             <div className="skill">
                <h3>CSS</h3>
              <div className="skill-bar"><ProgressBar completed={70} height={22} isLabelVisible={false}>HTML</ProgressBar></div>
             </div>
             <div className="skill">
                <h3>JavaScript</h3>
              <div className="skill-bar"><ProgressBar completed={55} height={22} isLabelVisible={false}>HTML</ProgressBar></div>
             </div>
             <div className="skill">
                <h3>Soft Skill</h3>
              <div className="skill-bar"><ProgressBar completed={75} height={22} isLabelVisible={false}>HTML</ProgressBar></div>
             </div>
             <div className="skill">
                <h3>Office Skill</h3>
              <div className="skill-bar"><ProgressBar completed={80} height={22} isLabelVisible={false}>HTML</ProgressBar></div>
             </div>
             </div>
        </div>
    )
}

export default skill
