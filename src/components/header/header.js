import React from "react";
import "./header.css";
import { Link, animateScroll as scroll } from "react-scroll";
const header = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <a className="nav-link" href="#">
                  About <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <a className="nav-link" href="#">
                  My Service <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skill-contain"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                isDynamic={true}
              >
                <a className="nav-link" href="#">
                  Skills <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="experience-contain"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <a className="nav-link" href="#">
                  Experience <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project-contain"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <a className="nav-link" href="#">
                  Projects <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact-contain"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <a className="nav-link" href="#">
                  Contact me <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default header;
