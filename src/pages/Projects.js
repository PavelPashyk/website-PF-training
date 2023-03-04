import { ProjectItem } from "../components/project/ProjectItem";

import { projectsArr } from "../mocks/projectList";

export const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projectsArr.map((item, index) => {
              return (
                <ProjectItem key={index} title={item.title} img={item.img} numberProject={index}/>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};
