import { useContext, useEffect } from "react";
// import { FetchContext } from "../Context/Context";

const FetchData = () => {
  // const { setExercise } = useContext(FetchContext);

  useEffect(() => {
    // Überprüfen, ob Daten im lokalen Speicher vorhanden sind
    const savedData = localStorage.getItem("exercises");
    if (savedData) {
      const exercises = JSON.parse(savedData);
    } else {
      // Daten von der API abrufen, wenn keine im lokalen Speicher vorhanden sind
      const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1500";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "da0a0652e4mshbb261b834ede12bp1a1454jsn72f572be02af",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("exercises", JSON.stringify(data));
          // setExercise(data); // Aktualisieren des Zustands mit abgerufenen Daten
        })
        .catch((error) =>
          console.error("Fehler beim Abrufen der Daten:", error)
        );
    }
  }, []);

  return null; // Oder geben Sie hier ein Element zurück, wenn nötig
};

export default FetchData;
