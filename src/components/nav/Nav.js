import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav_title">
        <h1 className="Name">Ahmad Kariem</h1>
        <h2>MBA, B.Sc</h2><br></br>
        <h2 className="FS_dev">Full Stack Developer</h2>
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
        <ul className="Nav_items">
          <li>
            <Link to="/">|Home|</Link>
          </li>
          <li>
            <Link to="/projects">|Projects|</Link>
          </li>
          <li>
            <Link to="/skills">|Skills|</Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1x2mc9Uwp1gL1Wp9OwQAI8VtA4HDg0Z7q/view?usp=sharing"
              download="AhmadCV"
              target="_blank"
            >
              |Download CV|
            </a>
          </li>
        </ul>
      </nav>
      {/* <div className="CV">
        <a
          href="https://drive.google.com/file/d/1x2mc9Uwp1gL1Wp9OwQAI8VtA4HDg0Z7q/view?usp=sharing"
          download="AhmadCV"
          target="_blank"
        >
          Download my CV
        </a>
      </div> */}
    </div>
  );
}

export default Nav;
