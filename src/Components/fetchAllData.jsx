import { useContext, useEffect } from "react";
// import { FetchContext } from "../Context/Context";
import data from "../Data/dataAllImg.json";

const FetchData = () => {
  useEffect(() => {
    // Überprüfen, ob Daten im lokalen Speicher vorhanden sind
    const savedData = JSON.parse(localStorage.getItem("exercises"));

    console.log("savedData:", savedData);
    if (!savedData) {
      // Daten von der API abrufen, wenn keine im lokalen Speicher vorhanden sind
      localStorage.setItem("exercises", JSON.stringify(data));
    }
  }, []);
};

export default FetchData;
