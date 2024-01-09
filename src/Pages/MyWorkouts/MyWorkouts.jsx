import { Button } from "@mui/material";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import WorkoutCardList from "../../Components/WorkoutCardList/WorkoutCardList";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import "./MyWorkouts.css";
import { Link } from "react-router-dom";
import { AllWorkoutPlansContext } from "../../Context/Context";
import { useContext } from "react";
import AddWorkoutNoData from "../../Components/AddWorkoutNoData/AddWorkoutNoData";

const MyWorkouts = () => {
  const { allWorkoutPlans, setAllWorkoutPlans } = useContext(
    AllWorkoutPlansContext
  );

  console.log(allWorkoutPlans.length);
  return (
    <>
      <Nav />
      <Header
        text="My Workouts"
        description="Here, you'll discover your training plans, ready for your personal touch. Edit, refine, and share them with others, shaping your fitness journey just the way you want."
      />

      <div className="content">
        <div className="btn-area-left">
          <Link to="/new-workout">
            <Button variant="contained" startIcon={<AddCircleRoundedIcon />}>
              Create New Workout
            </Button>
          </Link>
        </div>
        {allWorkoutPlans.length <= 0 ? (
          <AddWorkoutNoData />
        ) : (
          <WorkoutCardList />
        )}
      </div>
    </>
  );
};

export default MyWorkouts;
