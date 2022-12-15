import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="Skills">
        <div className="Technical_skills">
          <h2>Technical Skills</h2>
          <div className="Skills_list">
            <ul className="Languages" aria-label="Languages and Frameworks">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript (ES6)</li>
              <li>React</li>
              <li>Redux</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Jest</li>
              <li>React Testing Library</li>
            </ul>
            <ul className="Tools" aria-label="Other Tools">
              <li>Git</li>
              <li>GitHub</li>
              <li>VSCode</li>
              <li>Chrome Dev Tools</li>
              <li>Postman</li>
              <li>Postbird</li>
              <li>Microsoft Excel/Google Sheets</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="Soft_skills">
          <h2>Soft Skills</h2>
          <div className="Skills_list">
            <ul className="Personal" aria-label="Personal Attributes">
              <li>Strong work ethic</li>
              <li>Continuous curiosity</li>
              <li>Self motivated</li>
              <li>Coachable</li>
              <li>Internal locus of control</li>
              <li>Integrity</li>
              <li>Respectful and polite</li>
            </ul>
            <ul className="Developed" aria-label="Professionally Developed">
                <li>Complex problem solving</li>
                <li>Customer service and sales</li>
                <li>Project and people management</li>
                <li>Leading teams</li>
                <li>Recruiting and hiring</li>
                <li>Researching and implementing new tools</li>
                <li>Public speaking</li>
              </ul>
          </div>
        </div>
    
    </section>
  );
}

export default Skills;
