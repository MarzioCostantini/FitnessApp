import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";

const AllExercise = () => {
  return (
    <>
      <Nav />
      <Header
        text="All Exercise"
        description="Discover your perfect fitness partner! Our app offers a complete range of exercises, each with an image and a concise description. Tailored for both beginners and advanced athletes, it's designed to help you achieve your fitness goals. Dive into workouts for every muscle group and join us on the journey to a healthier, stronger you!"
      />
      <div className="content">
        <h1>hi</h1>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
      </div>
    </>
  );
};

export default AllExercise;
