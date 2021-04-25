import React from 'react'
import './header.css'
import { Link, animateScroll as scroll } from "react-scroll";
const header = () => {
    return ( 
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link 
                        to="banner"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}>
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link 
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}>
                    <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link 
                        to="service"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}>
                    <a class="nav-link" href="#">My Service <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link 
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                        isDynamic={true}>
                    <a class="nav-link" href="#">Skills <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link 
                        to="exp"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}>
                    <a class="nav-link" href="#">Experience <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link 
                        to="prj"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}>
                    <a class="nav-link" href="#">Projects <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact me</a>
                </li>
                </ul>
            </div>
            </nav>
            
        </div>
    )
}

export default header
