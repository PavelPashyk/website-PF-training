import { NavLink } from "react-router-dom";

import { BtnDarkMode } from "../btnDarkMode/BtnDarkMode";

import "./style.css";

export const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const getActiveLink = ({ isActive }) => {
    return isActive ? activeLink : normalLink;
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>
          {/* <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a> */}

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={getActiveLink}>
                Home
              </NavLink>
              {/* <a
                href="./index.html"
                className="nav-list__link nav-list__link--active"
              >
                Home
              </a> */}
            </li>

            <li className="nav-list__item">
              <NavLink to="/projects" className={getActiveLink}>
                Projects
              </NavLink>
              {/* <a href="./skills.html" className="nav-list__link">
                Projects
              </a> */}
            </li>

            <li className="nav-list__item">
              <NavLink to="/contacts" className={getActiveLink}>
                Contacts
              </NavLink>
              {/* <a href="./contacts.html" className="nav-list__link">
                Contacts
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
