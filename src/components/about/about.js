import React from 'react'
import './about.css'
const about = () => {
    return (
        <div className="about">
            <h2>About me</h2>
            <div className="content">
            <div className="content-img">
                <img src="av.jpg"></img>
            </div>
            <div className="content-intro">
                <h1>Nguyễn Phạm Tiến</h1>
                <p>I'm Fresher Front-end developer, I graduated from FPT University, majoring in software engineering 
                    </p>
                    <p>Date of birth: 08/10/1999</p>
                    <p>Location: Ha Noi, Vietnam</p>
                    <button className="btn btn-download"><a href="FU_NguyenPhamTien_Java_FPTSoftwareHoaLac.pdf">Download CV</a></button>
            </div>
        </div>
        </div>
    )
}

export default about
