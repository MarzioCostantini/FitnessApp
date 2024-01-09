import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import "./MyWorkouts.css";

const MyWorkouts = () => {
  return (
    <>
      <Nav />
      <Header
        text="My Workouts"
        description="Here, you'll discover your training plans, ready for your personal touch. Edit, refine, and share them with others, shaping your fitness journey just the way you want."
      />

      <div className="content">Your Workouts</div>
    </>
  );
};

export default MyWorkouts;
