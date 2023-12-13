import Nav from "./Components/Nav/Nav";
import Table from "./Components/tablegenerator/Table";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllExercise from "./Pages/AllExercise";
import Overview from "./Pages/Overview";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          FitPower - Shape Your Journey Every Rep, Every Step, Every Day.
        </title>
        <meta
          name="description"
          content="Maximize your fitness potential with our app, featuring an extensive collection of exercises for all levels. Detailed images and descriptions guide you through workouts tailored for every muscle group, catering to both beginners and advanced athletes. Start your journey towards a healthier, stronger self today! "
        />
      </Helmet>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/all-exercises" element={<AllExercise />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
