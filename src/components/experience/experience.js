import React from 'react'
import './experience.css'
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const experience = () => {
    let expList = [
        {
          id: 1,
          title: "FPT University",
          role: "Student",
          description: "Majoring in software engineering, learn programming language and technology such as C, Java, C#, HTML, CSS, SQL Server. Doing some projects about E-News, E-Commerce",
          date: "September 2017 - Present",
         
         },
         {
            id: 2,
            title: "FPT Software",
            role: "Intern",
            description: "Learning and doing project about JavaScript Framework Angular",
            date: "Jun 2020 - September 2020",
             
           }
        
    ]
    console.log(expList);
    return (
        <div className="experience-contain">
            <h2>Experience</h2>
            <div className="timelines">
             <VerticalTimeline>
                 
                {expList.map(exp =>{
                    console.log(exp);
                    return(
                  <VerticalTimelineElement key={exp.key} data={exp.date} dateClassName="date"
                  contentStyle={{background:'#fff',color:'#10182F'}}
                   >
                     <h3 className="vertical-timeline-element-title">
                         {exp.title}
                     </h3>
                    <p className="description">{exp.description}</p>
                    <p className="date">{exp.date}</p>
                  </VerticalTimelineElement>
                )
                })};
               </VerticalTimeline> 
                 
            </div>
        </div>
    )
}

export default experience
