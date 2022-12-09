import React from "react";

function Project({ id, title, tech, links, previewURL }) {
  return (
    <div className="Project">
      <h2 className="Project_title">{title}</h2>
      <ul className="Tech_list">
        {tech.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
      <ul className="Links">
        <li>
          <a href={links.website} target="_blank" rel="noreferrer">
            View Site
          </a>
        </li>
        <li>
          <a href={links.github}>GitHub Repo</a>
        </li>
      </ul>

      <img src={previewURL}/>
    </div>
  );
}

export default Project;
