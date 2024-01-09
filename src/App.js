import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllExercise from "./Pages/AllExercise";
import Overview from "./Pages/Overview";
import { Helmet } from "react-helmet";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//! Context
// wir Importieren unser Context
import { ThemeContext } from "./Context/Context";
import { LoadingContext } from "./Context/Context";
import { FetchContext } from "./Context/Context";
import { WorkoutPlansContext } from "./Context/Context";
import { AllWorkoutPlansContext } from "./Context/Context";

// !Themen

import { createTheme, colors, ThemeProvider } from "@mui/material";
import Loadingscreen from "./Pages/LoadingPage";
import { useEffect, useState } from "react";
import MyFavorites from "./Pages/MyFavorites";
import CreateNewWorkoutPlan from "./Pages/CreateNewWorkoutPlan/CreateNewWorkoutPlan";
import DetailPageWorkout from "./Pages/DetailPageWorkout/DetailPageWorkout";
import MyWorkouts from "./Pages/MyWorkouts/MyWorkouts";

function App() {
  // erstellt einen State
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exercise, setExercise] = useState(null);
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [allWorkoutPlans, setAllWorkoutPlans] = useState([]);

  console.log("workoutplan ", workoutPlan);
  console.log("allWorkoutPlans App ", allWorkoutPlans);

  const themee = createTheme({
    palette: {
      primary: {
        main: "#ff760d",
      },
    },
    typography: {
      h1: {
        fontSize: "clamp(2.4rem, 2.8vw, 3.2rem)",
      },
      h2: {
        fontSize: "clamp(1.8rem, 4.5vw, 4.8rem)",
      },
      h3: {
        fontSize: "clamp(1.6rem, 1.7vw, 1.6rem)",
      },
      h4: {
        fontSize: "clamp(1.7rem, 3.8vw, 4.2rem)",
      },
      h5: {
        fontSize: "clamp(1.6rem, 3.6vw, 4rem)",
      },
      h6: {
        fontSize: "clamp(1.6rem, 3.4vw, 3.8rem)",
      },
      p: {
        fontSize: "clamp(1.4rem, 2vw, 1.6rem)",
      },
      a: {
        fontSize: "clamp(1.4rem, 2vw, 1.6rem)",
      },
      button: {
        fontSize: "clamp(1.4rem, 1.8vw, 1.4rem)",
        color: "white",
      },
    },
  });

  return (
    <section className={theme ? "dark" : null}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          FitPower - Shape Your Journey Every Rep, Every Step, Every Day.
        </title>
        <meta
          name="description"
          content="Maximize your fitness potential with our app, featuring an extensive collection of exercises for all levels. Detailed images and descriptions guide you through workouts tailored for every muscle group, catering to both beginners and advanced athletes. Start your journey towards a healthier, stronger self today! "
        />
      </Helmet>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FetchContext.Provider value={{ exercise, setExercise }}>
          <LoadingContext.Provider value={{ setLoading }}>
            <AllWorkoutPlansContext.Provider
              value={{ allWorkoutPlans, setAllWorkoutPlans }}
            >
              <WorkoutPlansContext.Provider
                value={{ workoutPlan, setWorkoutPlan }}
              >
                {loading ? (
                  <ThemeProvider theme={themee}>
                    <BrowserRouter>
                      <div className="wrapper">
                        <Routes>
                          <Route path="/" element={<Overview />} />
                          <Route path="/exercises" element={<AllExercise />} />
                          <Route
                            path="/my-favorites"
                            element={<MyFavorites />}
                          />
                          <Route
                            path="/new-workout"
                            element={<CreateNewWorkoutPlan />}
                          />
                          <Route path="/my-workout" element={<MyWorkouts />} />
                          <Route
                            path="/my-workouts/:name"
                            element={<DetailPageWorkout />}
                          />
                        </Routes>
                      </div>
                    </BrowserRouter>
                  </ThemeProvider>
                ) : (
                  <Loadingscreen />
                )}
              </WorkoutPlansContext.Provider>
            </AllWorkoutPlansContext.Provider>
          </LoadingContext.Provider>
        </FetchContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
