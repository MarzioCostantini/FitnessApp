import { useContext } from "react";
import { AllWorkoutPlansContext } from "../../Context/Context";
import "./WorkoutCardList.css";
import { Link } from "react-router-dom";

const WorkoutCardList = () => {
  const { allWorkoutPlans, setAllWorkoutPlans } = useContext(
    AllWorkoutPlansContext
  );

  return (
    <section className="workout-card-wrapper">
      {allWorkoutPlans?.map((item, index) => (
        <Link
          to={`/my-workouts/${item.url}`}
          key={index}
          className="workout-card"
        >
          <div className="content-card">
            <h3>{item.name}</h3>
            <p>Createt: {item.date}</p>
          </div>
          <div className="ex-part ">
            <p className="ex-number">{item.exercises.length}</p>
            <p>Exercises</p>
          </div>
          <div className="circle"></div>
        </Link>
      ))}
    </section>
  );
};

export default WorkoutCardList;
