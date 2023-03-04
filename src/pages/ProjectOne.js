import { useParams } from "react-router-dom";

import { BtnGitHub } from "../components/btnGitHub/BtnGitHub";
import { projectsArr } from "./../mocks/projectList";

export const ProjectOne = () => {
  const { idd } = useParams();
  const projectNum = projectsArr[idd];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{projectNum.title}</h1>

          <img
            src={projectNum.imgBig}
            alt={projectNum.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{projectNum.skills}</p>
          </div>

          {projectNum.gitHubLink && (
            <BtnGitHub linkTo="https://www.youtube.com/" />
          )}
        </div>
      </div>
    </main>
  );
};
