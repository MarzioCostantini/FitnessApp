import logo from "../../assets/img/PowerRator_logo.svg";

import PlanIcon from "@mui/icons-material/ContentPaste";
import HiveIcon from "@mui/icons-material/Hive";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import StarIcon from "@mui/icons-material/Star";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";

import "./Nav.css";

import { NavLink, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Context
import { AllWorkoutPlansContext, FetchContext } from "../../Context/Context";
import FetchData from "../fetchAllData";

const Nav = () => {
  const [favNum, setFavNum] = useState(null);
  const { exercise } = useContext(FetchContext);
  const { allWorkoutPlans, setAllWorkoutPlans } = useContext(
    AllWorkoutPlansContext
  );

  useEffect(() => {
    const filterOb = exercise?.filter((item) => item.favorite === true);
    const favLenght = filterOb?.length;
    setFavNum(favLenght);
  }, [exercise]);

  return (
    <section className="nav-wrapper">
      <FetchData />
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
            <FitnessCenterRoundedIcon />
            <h3>All Exercises</h3>
          </NavLink>
          <NavLink to="/my-favorites" className="nav-item">
            <StarIcon />
            <div className="nav-num">
              <h3>My Favorites </h3>
              {favNum != 0 && <p>{favNum}</p>}
            </div>
          </NavLink>
          <NavLink to="/new-workout" className="nav-item">
            <AddCircleRoundedIcon />
            <div className="nav-num">
              <h3>Create New Workout </h3>
            </div>
          </NavLink>
          <NavLink to="/my-workout" className="nav-item">
            <TaskRoundedIcon />
            <div className="nav-num">
              <h3>My Workout </h3>
            </div>
          </NavLink>
          <div className="line"></div>
          <section className="plans">
            {allWorkoutPlans?.map((item, index) => (
              <NavLink
                key={index}
                to={`/workout/${item.url}`}
                className="nav-item"
              >
                <DescriptionRoundedIcon />
                <div className="nav-num">
                  <h3>{item.name} </h3>
                </div>
              </NavLink>
            ))}
          </section>
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
