import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";

const CreateNewWorkoutPlan = () => {
  return (
    <>
      <Nav />
      <Header
        text="Create New Workout Plan"
        description="Jumpstart your fitness journey with our app! Tailored for every level, our platform offers a diverse range of exercises with images and descriptions. Create a personalized routine for any goal and explore workouts for every muscle group. Begin your path to a stronger, healthier you today!"
      />
      <div className="content"></div>
    </>
  );
};

export default CreateNewWorkoutPlan;
