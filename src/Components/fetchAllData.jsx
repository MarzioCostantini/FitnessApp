import { useContext, useEffect } from "react";
import { FetchContext } from "../Context/Context";

const FetchData = () => {
  const { setExercise } = useContext(FetchContext);
  useEffect(() => {
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1500";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "da0a0652e4mshbb261b834ede12bp1a1454jsn72f572be02af",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setExercise(data);
      })
      .catch((error) => console.error("Fehler beim Abrufen der Daten:", error));
  }, []);
};

export default FetchData;
