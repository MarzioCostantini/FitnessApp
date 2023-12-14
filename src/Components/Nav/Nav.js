import logo from "../../assets/img/PowerRator_logo.svg";

import PlanIcon from "@mui/icons-material/ContentPaste";
import HiveIcon from "@mui/icons-material/Hive";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import "./Nav.css";

import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="nav-wrapper">
      <div className="top-element">
        <nav>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo PowerRator" />
            <h2>FitPower</h2>
          </Link>
          <p className="main-text">MAIN MENU</p>

          <NavLink to="/" className="nav-item">
            <HiveIcon />
            <h3>Overview</h3>
          </NavLink>
          <NavLink to="/all-exercises" className="nav-item">
            <FitnessCenterIcon />
            <h3>All Exercisesd</h3>
          </NavLink>
          <Link to="#" className="nav-item">
            <FitnessCenterIcon />
            <h3>MY Favorits</h3>
          </Link>
        </nav>
      </div>

      <div className="bottom-element">
        <article>
          <p>FitPower</p>
          <p>
            Made with ♥ by
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/MarzioCostantini"
            >
              Marzio
            </a>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Nav;
