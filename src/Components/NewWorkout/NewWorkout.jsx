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
import { Alert, Button, Snackbar, Stack, TextField } from "@mui/material";
import Table from "../CollapsibleTable/CollapsibleTable";
import CollapsibleTable from "../CollapsibleTable/CollapsibleTable";
import AddExerciseNoData from "../AddExerciseNoData/AddExerciseNoData";

const NewWorkout = () => {
  const [workoutName, setWorkoutName] = useState("");
  const { exercise, setExercise } = useContext(FetchContext);
  // Wo die einzelnen Trainingspläne gespeicher werden
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutPlansContext);
  // Wo alle Trainigspläne gespeichert werden
  const { allWorkoutPlans, setAllWorkoutPlans } = useContext(
    AllWorkoutPlansContext
  );
  const [openSuccess, setOpenSuccess] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  console.log("allWorkoutPlans ", allWorkoutPlans);

  // ! Alert
  // Sucess
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  // Error
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorOpen(false);
  };

  const createWorkout = () => {
    if (workoutName !== "") {
      let exercise = [...workoutPlan];

      const newWorkout = {
        exercise,
        name: workoutName,
        date: new Date(),
      };

      const updatedWorkouts = [...allWorkoutPlans];
      updatedWorkouts.push(newWorkout);

      setAllWorkoutPlans(updatedWorkouts);
      setWorkoutPlan([]);
      setWorkoutName("");
      setOpenSuccess(true);
    } else {
      setErrorOpen(true);
    }
  };

  return (
    <section className="new-workout">
      <article className="hero">
        <TextField
          disabled={workoutPlan.length === 0}
          id="standard-basic"
          label="Name"
          variant="outlined"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <Button
          onClick={createWorkout}
          disabled={workoutPlan.length === 0}
          variant="contained"
          startIcon={<SaveRoundedIcon />}
        >
          Save Plan
        </Button>
      </article>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            <p>Your training plan has been successfully saved.</p>
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={errorOpen}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: "100%" }}
          >
            <p> Error - Please enter a name at you training plan</p>
          </Alert>
        </Snackbar>
      </Stack>
      {workoutPlan <= 0 ? (
        <AddExerciseNoData />
      ) : (
        <CollapsibleTable workoutPlan={workoutPlan} />
      )}
    </section>
  );
};

export default NewWorkout;
