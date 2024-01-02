import { useEffect, useState } from "react";
import "./MyFavoritesEx.css";
// Card
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "../SingleCard/SingleCard.css";
import Button from "@mui/material/Button";
import NoData from "../NoData/NoData";
import { IconButton } from "@mui/material";

const MyFavoritesEx = () => {
  const [savedStorage, setSavedStorage] = useState([]);
  const [favExercises, setFavExercises] = useState([]);
  const [loadetItem, setLoadetItem] = useState(12);
  const [selectedFavIndex, setSelectedFavIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("exercises"));
    if (data) {
      setSavedStorage(data);
    }
  }, []);

  // Sobald daten im main State sind, wird gefiltert
  useEffect(() => {
    let filterData = savedStorage?.filter((item) => item.favorite === true);
    setFavExercises(filterData);
  }, [savedStorage]);

  // LOGS
  console.log("lieblingsübungen", favExercises);
  // console.log("ich bin auf der My Fav Seite,", savedStorage);

  // ! Fügt zum Fav hinzu
  const setFav = (id) => {
    const favÜbung = savedStorage.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );

    // Aktualisieren des States und des lokalen Speichers
    setSavedStorage(favÜbung);
    localStorage.setItem("exercises", JSON.stringify(favÜbung));
  };

  return favExercises.length === 0 ? (
    <NoData />
  ) : (
    <section className="favlist">
      {savedStorage
        ?.filter((item) => item.favorite === true)
        .map((elm, index) => (
          <div className="card" key={index}>
            <img src={`${elm.gifUrl}.gif`} alt="exercise image" />
            <h3>{elm.name}</h3>
            <Button size="large">Show More</Button>
            <IconButton
              className="star-icon"
              onClick={() => setFav(elm.id)}
              aria-label="delete"
            >
              <StarIcon />
            </IconButton>
          </div>
        ))}
    </section>
  );
};

export default MyFavoritesEx;
