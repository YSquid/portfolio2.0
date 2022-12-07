import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav_title">
        <h1>
          <span id="ahmad">Ahmad</span>Kariem{" "}
          <span id="degrees">MBA, B.Sc</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <a
          href="https://github.com/YSquid"
          target="_blank"
          rel="noreferrer"
          className="GitHub_icon"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmad-kariem/"
          target="_blank"
          rel="noreferrer"
          className="Linkedin_icon"
        >
          <AiFillLinkedin />
        </a>
        <a href="mailto:ahmad.k@ysquid.tech" className="Email_icon">
          <MdEmail />
        </a>
      </div>

      <nav className="Nav_links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>

      <div className="Nav_footer">
        <h2>Get In Touch</h2>
        <ul>
          <li>
            <a href="mailto:ahmad.k@ysquid.tech" className="Email_icon">
              Email: ahmad.k@ysquid.tech
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ahmad-kariem/"
              target="_blank"
              rel="noreferrer"
              className="Linkedin_icon"
            >
              LinkedIn: linkedin.com/in/ahmad-kariem/
            </a>
          </li>

          <li>
            <a
              href="https://github.com/YSquid"
              target="_blank"
              rel="noreferrer"
              className="GitHub_icon"
            >
              GitHub: github.com/Ysquid
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
