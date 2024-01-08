import "./ModalRepetitions.css";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField } from "@mui/material";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { WorkoutPlansContext } from "../../Context/Context";

const ModalRepetitions = ({ setOpen, exercisModal }) => {
  const [sets, setSets] = useState("");
  const [repetitions, setRepetition] = useState("");
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutPlansContext);

  console.log("sets", sets, " Reps:", repetitions);
  console.log("exercisModal", exercisModal);

  //   ! Add to Workout Plan Funktion
  const save = () => {
    setOpen(false);
    // Add sets/ Reps to data

    // Erstellen Sie ein neues Übungsobjekt mit den Sets und Wiederholungen
    const newExercise = {
      ...exercisModal, // Kopieren Sie alle vorhandenen Eigenschaften aus dem exerciseModal
      sets: sets, // Fügen Sie die Anzahl der Sets hinzu
      repetitions: repetitions, // Fügen Sie die Anzahl der Wiederholungen hinzu
    };

    // Fügen Sie das neue Übungsobjekt zum bestehenden workoutPlan hinzu
    const updatedPlan = [...workoutPlan]; // Kopieren Sie den vorhandenen Plan, um ihn nicht zu überschreiben
    updatedPlan.push(newExercise); // Fügen Sie das neue Übungsobjekt hinzu

    // Setzen Sie den aktualisierten Plan im Context
    setWorkoutPlan(updatedPlan);
  };

  return (
    <section className="modal-wrapper-reps">
      <article>
        <div>
          <div className="headline">
            <h4>Add Repetitions to {exercisModal.name}</h4>
          </div>
          <div className="wdh">
            <TextField
              type="number"
              id="standard-basic"
              label="Sets"
              variant="outlined"
              value={sets}
              onChange={(e) => setSets(Number(e.target.value))}
            />
            <LoopRoundedIcon />
            <TextField
              type="number"
              id="standard-basic"
              label="Repetitions "
              variant="outlined"
              value={repetitions}
              onChange={(e) => setRepetition(Number(e.target.value))}
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
