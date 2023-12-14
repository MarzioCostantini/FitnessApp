import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import "./allExercised.css";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import Loading from "../Loading";
import SingleCard from "../SingleCard/SingleCard";

// !Context
import { useContext } from "react";
import { FetchContext } from "../../Context/Context";

const AllExercised = () => {
  const { exercise } = useContext(FetchContext);

  const [bodypart, setBodypart] = useState([
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ]);
  const [value, setValue] = useState(bodypart[0]);
  const [filterData, setFilterdata] = useState(null);
  const [loadetItem, setLoadetItem] = useState(12);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ! Filtert die daten je nach Bodytype
  useEffect(() => {
    if (value === "all") {
      setFilterdata(exercise);
    } else {
      const dataaa = exercise?.filter((elm) => elm.bodyPart === value);
      setFilterdata(dataaa);
    }
  }, [value]);

  // ! Loade More Btn
  useEffect(() => {
    setLoadetItem(12);
    console.log("laoding item zurückgesetzt auf", loadetItem);
  }, [value]);

  // ! Searchfield
  useEffect(() => {
    const filteredData = exercise.filter((exercise) =>
      exercise.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterdata(filteredData);

    setValue("all");
  }, [searchInput, exercise]);

  // ! LOGS
  console.log("value", value);
  console.log("exercise", exercise?.length);
  console.log("exercise", exercise);
  console.log("filterData", filterData?.length);
  console.log("loadetItem", loadetItem);
  console.log("searchinput:", searchInput);

  return (
    <section>
      <article className="filter">
        <Box sx={{ width: "70%", bgcolor: "background.paper" }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{
              ".MuiTab-root": {
                fontSize: "12px", // Setzt die Schriftgröße für alle Tabs
              },
            }}
            value={value}
            onChange={handleChange}
            // centered
          >
            {bodypart.map((elm, index) => (
              <Tab key={index} value={elm} label={elm} />
            ))}
          </Tabs>
        </Box>

        {/* ! SUCHEN */}
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
              fontSize: "14px", // Schriftgröße auf 14px setzen
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
      </article>

      {filterData === null ? (
        <Loading />
      ) : (
        <article className="cardlist">
          <h6>Show {value} exercises</h6>
          <section className="gridList">
            {filterData?.slice(0, loadetItem).map((elm, index) => (
              <SingleCard key={index} name={elm.name} img={elm.gifUrl} />
            ))}
          </section>
          <div className="btn-mui">
            <Button
              onClick={() => setLoadetItem(loadetItem + 10)}
              variant="contained"
              disabled={filterData?.length < loadetItem}
            >
              Load more
            </Button>
            <Button
              onClick={() => setLoadetItem(loadetItem + 1324)}
              variant="outlined"
              disabled={filterData?.length < loadetItem}
            >
              Load all
            </Button>
          </div>
        </article>
      )}
    </section>
  );
};

export default AllExercised;
