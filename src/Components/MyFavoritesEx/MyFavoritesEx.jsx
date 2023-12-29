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
  const setFav = (index) => {
    setSelectedFavIndex(index);
  };

  useEffect(() => {
    if (selectedFavIndex !== null) {
      // Kopiere den aktuellen Zustand, um Mutationen zu vermeiden.
      let updatedStorage = [...savedStorage];

      // Überprüfe, ob das Element am gegebenen Index existiert.
      if (updatedStorage[selectedFavIndex]) {
        // Invertiere den 'favorite'-Wert des Elements.
        updatedStorage[selectedFavIndex] = {
          ...updatedStorage[selectedFavIndex],
          favorite: !updatedStorage[selectedFavIndex].favorite,
        };

        // Aktualisiere den State und den Local Storage.
        setSavedStorage(updatedStorage);
        localStorage.setItem("exercises", JSON.stringify(updatedStorage));
      }

      // Zurücksetzen des selectedFavIndex, um Mehrfachaktualisierungen zu vermeiden.
      setSelectedFavIndex(null);
    }
  }, [selectedFavIndex, savedStorage]);
  return (
    <section className="favlist">
      {savedStorage
        ?.filter((item) => item.favorite === true)
        .map((elm, index) => (
          <div className="card" key={index}>
            <img src={`${elm.gifUrl}.gif`} alt="übungsbild" />
            <h3>{elm.name}</h3>
            <Button size="large">Show More</Button>

            <StarIcon onClick={() => setFav(index)} />
          </div>
        ))}
    </section>
  );
};

export default MyFavoritesEx;
