import { useEffect, useState } from "react";
import "./MyFavoritesEx.css";
// Card
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "../SingleCard/SingleCard.css";
import Button from "@mui/material/Button";

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
  // # ======= MIT ID TESTEN ZU FINDEN NICHT MIT DEM INDEX!!!!!!===========
  const setFav = (id) => {
    const favÜbung = savedStorage.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );

    console.log(
      "MyFavorietesEx - die karte mit der id:",
      id,
      " wurde bearbeitet"
    );

    // Aktualisieren des States und des lokalen Speichers
    setSavedStorage(favÜbung);
    localStorage.setItem("exercises", JSON.stringify(favÜbung));
  };

  return (
    <section className="favlist">
      {savedStorage
        ?.filter((item) => item.favorite === true)
        .map((elm, index) => (
          <div className="card" key={index}>
            <img src={`${elm.gifUrl}.gif`} alt="übungsbild" />
            <h3>{elm.name}</h3>
            <Button size="large">Show More</Button>

            <StarIcon onClick={() => setFav(elm.id)} />
          </div>
        ))}
    </section>
  );
};

export default MyFavoritesEx;
