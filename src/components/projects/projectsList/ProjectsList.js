import React from "react";
import projects from "./projectsStorage";
import "./ProjectsList.css";
import Project from "../project/Project";

function ProjectsList() {
  return (
    <section className="Projects_list">
      <h1>Projects I've Built</h1>
      <div className="Projects_map">
        {projects.map((project) => {
          const { id, title, tech, description1, description2, links, previewURL } = project;
          return (
              <Project
              key={id}
              id={id}
              title={title}
              tech={tech}
              description1={description1}
              description2={description2}
              links={links}
              previewURL={previewURL}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsList;
