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
import AddExerciseNoData from "../AddExerciseNoData/AddExerciseNoData";

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
      {workoutPlan <= 0 ? (
        <AddExerciseNoData />
      ) : (
        <CollapsibleTable workoutPlan={workoutPlan} />
      )}
    </section>
  );
};

export default NewWorkout;
