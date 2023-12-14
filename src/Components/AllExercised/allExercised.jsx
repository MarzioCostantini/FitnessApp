import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";

import Loading from "../Loading";
import SingleCard from "../SingleCard";

// !Context
import { useContext } from "react";
import { FetchContext } from "../../Context/Context";

const AllExercised = () => {
  const { exercise } = useContext(FetchContext);

  console.log("exercise", exercise);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ! Filtert die daten je nach Bodytype
  useEffect(() => {
    const dataaa = exercise?.filter((elm) => {
      return elm.bodyPart === value;
    });
    setFilterdata(dataaa);
  }, [value]);

  console.log("FilterData", filterData);

  console.log(value);
  return (
    <section>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          sx={{
            ".MuiTab-root": {
              fontSize: "10px", // Setzt die Schriftgröße für alle Tabs
            },
          }}
          value={value}
          onChange={handleChange}
          centered
        >
          {bodypart.map((elm, index) => (
            <Tab key={index} value={elm} label={elm} />
          ))}
        </Tabs>
      </Box>

      {filterData === null ? (
        <Loading />
      ) : (
        <section className="gridList">
          {value === "all"
            ? exercise?.map((elm, index) => (
                <div>
                  <SingleCard key={index} name={elm.name} img={elm.gifUrl} />
                </div>
              ))
            : filterData?.map((elm, index) => (
                <SingleCard key={index} name={elm.name} img={elm.gifUrl} />
              ))}
        </section>
      )}
    </section>
  );
};

export default AllExercised;
