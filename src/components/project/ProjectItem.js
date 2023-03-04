import { NavLink } from "react-router-dom";

import "./style.css";

export const ProjectItem = (props) => {
  return (
    <NavLink to={`/project-one/${props.numberProject}`}>
      <li className="project">
        <img src={props.img} alt={props.title} className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </li>
    </NavLink>
  );
};
