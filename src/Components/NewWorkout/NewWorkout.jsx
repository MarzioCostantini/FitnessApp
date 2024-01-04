import "./NewWorkout.css";
import { FetchContext } from "../../Context/Context";
import { WorkoutPlansContext } from "../../Context/Context";
import { useContext, useState } from "react";



const NewWorkout = () => {
  const { exercise, setExercise } = useContext(FetchContext);
  const { workoutPlans, setWorkoutPlans } = useContext(WorkoutPlansContext);


  return (
    <section className="new-workout">
     
    </section>
  );
};

export default NewWorkout;
