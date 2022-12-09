import React from "react";
import projects from "./projectsStorage";
import "./ProjectsList.css";
import Project from "../project/Project";

function ProjectsList() {
  return (
    <section className="Projects_list">
      <h1>Projects I've Made</h1>
      <div className="Projects_map">
        {projects.map((project) => {
          const { id, title, tech, links, previewURL } = project;
          return (
            <Project
              key={id}
              title={title}
              tech={tech}
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
