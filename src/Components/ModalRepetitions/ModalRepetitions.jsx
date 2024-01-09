import "./ModalRepetitions.css";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, InputAdornment, TextField } from "@mui/material";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { WorkoutPlansContext } from "../../Context/Context";
import { AccountCircle } from "@mui/icons-material";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";

const ModalRepetitions = ({ setOpen, exercisModal }) => {
  const [sets, setSets] = useState("");
  const [repetitions, setRepetition] = useState("");
  const [weight, setWeight] = useState("");
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutPlansContext);

  console.log("sets", sets, " Reps:", repetitions);
  console.log("exercisModal", exercisModal);

  //   ! Add to Workout Plan Funktion
  const save = () => {
    setOpen(false);

    const newExercise = {
      ...exercisModal,
      sets: sets,
      repetitions: repetitions,
      weight: weight,
    };

    const updatedPlan = [...workoutPlan];
    updatedPlan.push(newExercise);

    setWorkoutPlan(updatedPlan);
  };

  return (
    <section className="modal-wrapper-reps">
      <article>
        <div>
          <div className="headline">
            <h4>
              Add Repetitions & Weights by <br />
              <span>{exercisModal.name}</span>
            </h4>
          </div>

          <div className="wdh">
            <TextField
              type="number"
              id="standard-basic"
              label="Sets"
              variant="standard"
              value={sets}
              onChange={(e) => setSets(Number(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RepeatRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="number"
              id="standard-basic"
              label="Repetitions "
              variant="standard"
              value={repetitions}
              onChange={(e) => setRepetition(Number(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RepeatRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="standard-basic"
              label="Weight "
              variant="standard"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FitnessCenterRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div onClick={() => setOpen(false)} className="close-btn">
            <CloseIcon />
          </div>
          <Button
            className="save-btn"
            onClick={save}
            disabled={repetitions === "" || sets === ""}
            variant="contained"
            startIcon={<SaveRoundedIcon />}
          >
            Add
          </Button>
        </div>
      </article>
    </section>
  );
};

export default ModalRepetitions;
