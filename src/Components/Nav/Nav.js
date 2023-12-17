import logo from "../../assets/img/PowerRator_logo.svg";

import PlanIcon from "@mui/icons-material/ContentPaste";
import HiveIcon from "@mui/icons-material/Hive";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StarIcon from "@mui/icons-material/Star";

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
          <NavLink to="/exercises" className="nav-item">
            <FitnessCenterIcon />
            <h3>All Exercisesd</h3>
          </NavLink>
          <NavLink to="/my-favorites" className="nav-item">
            <StarIcon />
            <h3>My Favorites</h3>
          </NavLink>
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
