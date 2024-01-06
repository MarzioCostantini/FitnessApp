import "./NewWorkout.css";
import { AllWorkoutPlansContext, FetchContext } from "../../Context/Context";
import { WorkoutPlansContext } from "../../Context/Context";
import { useContext, useState } from "react";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { Button, TextField } from "@mui/material";
import Table from "../CollapsibleTable/CollapsibleTable";
import CollapsibleTable from "../CollapsibleTable/CollapsibleTable";

const NewWorkout = () => {
  const { exercise, setExercise } = useContext(FetchContext);
  // Wo die einzelnen Trainingspläne gespeicher werden
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutPlansContext);
  // Wo alle Trainigspläne gespeichert werden
  const { allWorkoutPlans, setAllWorkoutPlans } = useContext(
    AllWorkoutPlansContext
  );

  // ! Remove Exercise from Workout
  const removeExercise = (id) => {
    console.log("angeklickt", id);
    const updatedWorkoutPlan = workoutPlan.filter(
      (exercise) => exercise.id !== id
    );
    setWorkoutPlan(updatedWorkoutPlan);
  };

  return (
    <section className="new-workout">
      <article className="hero">
        <TextField id="standard-basic" label="Name" variant="outlined" />
        <Button variant="contained" startIcon={<SaveRoundedIcon />}>
          Save Plan
        </Button>
      </article>
      <div>
        {/* {workoutPlan?.map((item, index) => (
          <Accordion key={index} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id="panel1a-header"
            >
              <div className="content-acc">
                <p>{index + 1}</p>
                <p className="name">{item.name}</p>
                <div className="sm-line"></div>
                <p>Repetition 4 x 15</p>
                <div className="sm-line"></div>
                <p className="muscle">{item.target}</p>
              </div>
              <Button
                onClick={() => removeExercise(item.id)}
                variant="outlined"
              >
                Remove
              </Button>
            </AccordionSummary>
            <AccordionDetails>
              <article className="acc-visib">
                <div>
                  <h6>Instructions:</h6>
                  <ul>
                    {item.instructions.map((item, index) => (
                      <li>
                        <p className="num">{index + 1}</p>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <img src={`${item.gifUrl}.gif`} alt="Fitness gif" />
              </article>
            </AccordionDetails>
          </Accordion>
        ))} */}
      </div>

      <CollapsibleTable workoutPlan={workoutPlan} />
    </section>
  );
};

export default NewWorkout;
