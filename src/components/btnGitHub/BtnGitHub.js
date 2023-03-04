import "./style.css";

import gitHubIcon from "./../../img/icons/gitHub-black.svg";

export const BtnGitHub = (props) => {
  return (
    <a href={props.linkTo} className="btn-outline" target="_blank" rel="noreferrer">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};
