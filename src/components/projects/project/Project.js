import React from "react";
import "./Project.css";

function Project({ id, title, tech, description1, description2, links, previewURL }) {
  return (
    <div className="Project">
      <div className="Project_left">
        <h2 className="Project_title">{title}</h2>
        <ul className="Tech_list">
          {tech.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
        <div className="Descriptions">
          <p>{description1}</p>
          <p>{description2}</p>
          </div>
        <ul className="Links">
          <li>
            <a href={links.website} target="_blank" rel="noreferrer">
              View Site
            </a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </li>
        </ul>
      </div>
      <div className="Project_right">
        <img className="Preview_image" src={previewURL} />
      </div>
    </div>
  );
}

export default Project;
