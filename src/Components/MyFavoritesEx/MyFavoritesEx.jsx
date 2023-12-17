import { useEffect, useState } from "react";
import "./MyFavoritesEx.css";

const MyFavoritesEx = () => {
  const [savedStorage, setSavedStorage] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("exercises"));
    if (data) {
      setSavedStorage(data);
    }
  }, []);

  console.log("ich bin auf der My Fav Seite,", savedStorage);


  
  return (
    <section>
      <p>Favor</p>
    </section>
  );
};

export default MyFavoritesEx;
