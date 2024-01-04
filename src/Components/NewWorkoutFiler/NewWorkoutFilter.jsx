import "./NewWorkoutFilter.css";
import { FetchContext } from "../../Context/Context";
import { WorkoutPlansContext } from "../../Context/Context";
import { useContext, useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";

const NewWorkoutFilter = () => {
  const { exercise, setExercise } = useContext(FetchContext);
  const { workoutPlans, setWorkoutPlans } = useContext(WorkoutPlansContext);
  const [tabValue, setTabValue] = useState("all");

  console.log("tabelvaluie ist:", tabValue);

  const handleChange = (event, value) => {
    setTabValue(value);
  };

  return (
    <section className="newWoFilter">
      <div className="filter">
        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={tabValue}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label="All" value="all" />
                <Tab label="Favorites" value="fav" />
              </TabList>
            </Box>
            <section>
              {tabValue === "all"
                ? exercise?.map((item, index) => (
                    <div className="small-card">
                      <p className="item-name">{item.name.slice(0, 15)}...</p>
                      <div key={index}>
                        <Button variant="outlined">View</Button>
                        <Button variant="contained">Add</Button>
                      </div>
                    </div>
                  ))
                : exercise
                    ?.filter((item) => item.favorite === true)
                    .map((item, index) => (
                      <div className="small-card">
                        <p className="item-name">{item.name.slice(0, 15)}...</p>
                        <div key={index}>
                          <Button variant="outlined">View</Button>
                          <Button variant="contained">Add</Button>
                        </div>
                      </div>
                    ))}
            </section>
          </TabContext>
        </Box>
      </div>
    </section>
  );
};

export default NewWorkoutFilter;
