import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext, useEffect, useState } from "react";
import "./allExercised.css";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import Loading from "../Loading";
// import SingleCard from "../SingleCard/SingleCard";

// Card
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "../SingleCard/SingleCard.css";
import { IconButton } from "@mui/material";

// Context
import { FetchContext } from "../../Context/Context";
import Modal from "../Modal/Modal";

const AllExercised = () => {
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
  const [savedStorage, setSavedStorage] = useState(null);
  const { exercise, setExercise } = useContext(FetchContext);
  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ! Local Storage - holt sich die daten aus storage - schrieb in state
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("exercises"));
    if (data) {
      setSavedStorage(data);
      setExercise(data);
    }
  }, []);

  // ! Filtert die daten je nach Bodytype
  useEffect(() => {
    if (value === "all") {
      setFilterdata(savedStorage);
    } else {
      const dataaa = savedStorage?.filter((elm) => elm.bodyPart === value);
      setFilterdata(dataaa);
    }
  }, [value]);

  // ! Loade More Btn
  useEffect(() => {
    setLoadetItem(12);
  }, [value]);

  // ! Searchfield
  useEffect(() => {
    const filteredData = savedStorage?.filter((savedStorage) =>
      savedStorage.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterdata(filteredData);
  }, [searchInput, savedStorage]);

  useEffect(() => {
    setValue("all");
  }, [searchInput]);

  // ! LOGS
  // console.log("savedStorageeees", savedStorage);

  // ! Fügt zum Fav hinzu
  const setFav = (id) => {
    const favÜbung = savedStorage.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );

    console.log("die karte mit der id:", id, " wurde bearbeitet");

    // Aktualisieren des States und des lokalen Speichers und des Context
    setSavedStorage(favÜbung);
    setExercise(favÜbung);
    localStorage.setItem("exercises", JSON.stringify(favÜbung));
  };

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
              <Tab
                key={index}
                value={elm}
                label={elm}
                disabled={searchInput !== "" ? true : false}
              />
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
              <div className="card" key={index}>
                <img src={`${elm.gifUrl}.gif`} alt="übungsbild" />
                <h3>{elm.name}</h3>
                <Button
                  onClick={() => {
                    setModalData(elm);
                    setOpen(true);
                  }}
                  size="large"
                >
                  Show More
                </Button>
                {filterData?.[index].favorite ? (
                  <IconButton
                    className="star-icon full"
                    onClick={() => setFav(elm.id)}
                    aria-label="delete"
                  >
                    <StarIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    className="star-icon"
                    onClick={() => setFav(elm.id)}
                  >
                    <StarBorderIcon />
                  </IconButton>
                )}
              </div>
            ))}
            {open && (
              <Modal
                setSavedStorage={setSavedStorage}
                modalData={modalData}
                setOpen={setOpen}
              />
            )}
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
