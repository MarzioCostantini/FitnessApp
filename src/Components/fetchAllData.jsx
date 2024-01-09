import { useContext, useEffect } from "react";
// import { FetchContext } from "../Context/Context";
import data from "../Data/dataAllImg.json";

// Context
import { AllWorkoutPlansContext, FetchContext } from "../Context/Context";

const FetchData = () => {
  const { exercise, setExercise } = useContext(FetchContext);
  const { allWorkoutPlans, setAllWorkoutPlans } = useContext(
    AllWorkoutPlansContext
  );

  useEffect(() => {
    // Überprüfen, ob Daten im lokalen Speicher vorhanden sind
    const savedData = JSON.parse(localStorage.getItem("exercises"));
    const savedWorkouts = JSON.parse(localStorage.getItem("savedWorkouts"));

    // Schriebt die übungen in den Context State
    setExercise(savedData);
    // Schreibt die lokalen Trainingspläne in den Context State wenn keine daten  drinnen sind
    if (savedWorkouts != null) {
      setAllWorkoutPlans(savedWorkouts);
    }

    if (!savedData) {
      // Daten von der API abrufen, wenn keine im lokalen Speicher vorhanden sind
      localStorage.setItem("exercises", JSON.stringify(data));
    }

    if (!savedWorkouts) {
      console.log("Keine Trainingspläne vorhanden");
    }
  }, []);
};

export default FetchData;
