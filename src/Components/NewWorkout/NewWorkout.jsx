import "./NewWorkout.css";
import { FetchContext } from "../../Context/Context";
import { WorkoutPlansContext } from "../../Context/Context";
import { useContext, useState } from "react";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { Button, TextField } from "@mui/material";

const NewWorkout = () => {
  const { exercise, setExercise } = useContext(FetchContext);
  const { workoutPlans, setWorkoutPlans } = useContext(WorkoutPlansContext);

  return (
    <section className="new-workout">
      <article className="hero">
        <TextField id="standard-basic" label="Name" variant="outlined" />
        <Button variant="contained" startIcon={<SaveRoundedIcon />}>
          Save Plan
        </Button>
      </article>
      <div>
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <div className="content-acc">
              <p className="name">Air bike</p>
              <div className="sm-line"></div>
              <p>Repetition 4 x 15</p>
              <div className="sm-line"></div>
              <p className="muscle">Abs</p>
            </div>
            <Button variant="outlined">Remove</Button>
          </AccordionSummary>
          <AccordionDetails>
            <article className="acc-visib">
              <div>
                <h6>Instructions:</h6>
                <ul>
                  <li>
                    <p className="num">1</p>
                    <p>
                      Sunder your shoulders and your knees directly under your
                      hips.
                    </p>
                  </li>
                  <li>
                    <p className="num">1</p>
                    <p>Start on all fours with your hands directly</p>
                  </li>
                  <li>
                    <p className="num">1</p>
                    <p>Start on all fours with your hands directly</p>
                  </li>
                </ul>
              </div>

              <img
                src="https://raw.githubusercontent.com/MarzioCostantini/AllImgRepo/main/PsDLD7dmJxQttF.gif"
                alt="Fitness gif"
              />
            </article>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <div className="content-acc">
              <p className="name">Air bike</p>
              <div className="sm-line"></div>
              <p>Repetition 4 x 15</p>
              <div className="sm-line"></div>
              <p className="muscle">Abs</p>
            </div>
            <Button variant="outlined">Remove</Button>
          </AccordionSummary>
          <AccordionDetails>
            <article className="acc-visib">
              <div>
                <h6>Instructions:</h6>
                <ul>
                  <li>
                    <p className="num">1</p>
                    <p>
                      Sunder your shoulders and your knees directly under your
                      hips.
                    </p>
                  </li>
                  <li>
                    <p className="num">1</p>
                    <p>Start on all fours with your hands directly</p>
                  </li>
                  <li>
                    <p className="num">1</p>
                    <p>Start on all fours with your hands directly</p>
                  </li>
                </ul>
              </div>

              <img
                src="https://raw.githubusercontent.com/MarzioCostantini/AllImgRepo/main/PsDLD7dmJxQttF.gif"
                alt="Fitness gif"
              />
            </article>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <div className="content-acc">
              <p className="name">Air bike</p>
              <div className="sm-line"></div>
              <p>Repetition 4 x 15</p>
              <div className="sm-line"></div>
              <p className="muscle">Abs</p>
            </div>
            <Button variant="outlined">Remove</Button>
          </AccordionSummary>
          <AccordionDetails>
            <article className="acc-visib">
              <div>
                <h6>Instructions:</h6>
                <ul>
                  <li>
                    <p className="num">1</p>
                    <p>
                      Sunder your shoulders and your knees directly under your
                      hips.
                    </p>
                  </li>
                  <li>
                    <p className="num">1</p>
                    <p>Start on all fours with your hands directly</p>
                  </li>
                  <li>
                    <p className="num">1</p>
                    <p>Start on all fours with your hands directly</p>
                  </li>
                </ul>
              </div>

              <img
                src="https://raw.githubusercontent.com/MarzioCostantini/AllImgRepo/main/PsDLD7dmJxQttF.gif"
                alt="Fitness gif"
              />
            </article>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default NewWorkout;
