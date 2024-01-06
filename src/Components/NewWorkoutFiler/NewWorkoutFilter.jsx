import "./NewWorkoutFilter.css";
import { FetchContext } from "../../Context/Context";
import { WorkoutPlansContext } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SearchIcon from "@mui/icons-material/Search";

import { Button, InputAdornment, TextField } from "@mui/material";

const NewWorkoutFilter = () => {
  const { exercise, setExercise } = useContext(FetchContext);
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutPlansContext);
  const [tabValue, setTabValue] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [loadetItem, setLoadetItem] = useState(25);
  const [searchData, setSeachData] = useState(null);

  console.log("workoutplans", workoutPlan);

  // ! Tabs
  const handleChange = (event, value) => {
    setTabValue(value);
  };

  // ! Searchfield
  useEffect(() => {
    const filteredData = exercise?.filter((data) =>
      data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSeachData(filteredData);
  }, [searchInput]);

  // ! Add to Workoutplan
  const addToWorkout = (id) => {
    const selectedItem = exercise?.find((item) => item.id === id);

    console.log("id ", id);
    console.log("selectedItem ", selectedItem);
    setWorkoutPlan([...workoutPlan, selectedItem]);
  };

  return (
    <section className="newWoFilter">
      <div className="filter-new-ex">
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
            <TextField
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              label="Search"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: {
                  fontSize: "14px", //
                  marginBottom: "15px",
                  // Schriftgröße auf 14px setzen
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  padding: "5", // Padding auf 0 setzen, falls notwendig
                  height: "auto", // Höhe automatisch anpassen
                },
                width: "20%",
              }}
            />
            <section>
              {tabValue === "all"
                ? (searchInput !== "" ? searchData : exercise)
                    .slice(0, loadetItem)
                    .map((item, index) => (
                      <div key={index} className="small-card">
                        <p className="item-name">{item.name}</p>
                        <div key={index}>
                          {/* <Button variant="outlined">View</Button> */}
                          <Button
                            onClick={() => addToWorkout(item.id)}
                            variant="contained"
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    ))
                : (searchInput !== "" ? searchData : exercise)
                    ?.filter((item) => item.favorite === true)
                    .slice(0, loadetItem)
                    .map((item, index) => (
                      <div key={index} className="small-card">
                        <p className="item-name">{item.name}</p>
                        <div key={index}>
                          {/* <Button variant="outlined">View</Button> */}
                          <Button
                            onClick={() => addToWorkout(item.id)}
                            variant="contained"
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
              <div className="more-btn">
                <Button
                  onClick={() => setLoadetItem(loadetItem + 25)}
                  variant="contained"
                  disabled={
                    exercise?.length <= loadetItem ||
                    (tabValue === "fav" &&
                      exercise?.filter((item) => item.favorite === true)
                        .length <= loadetItem) ||
                    searchInput != ""
                  }
                >
                  Load more
                </Button>
              </div>
            </section>
          </TabContext>
        </Box>
      </div>
    </section>
  );
};

export default NewWorkoutFilter;
