import { Button } from "@mui/material";
import "./SingleCard.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";

const SingleCard = (props) => {
  const [savedStorage, setSavedStorage] = useState(null);

  console.log("savedStorage in SingleCard: ", savedStorage);

  // ! Holt sich den localen storage
  useEffect(() => {
    const localstate = JSON.parse(localStorage.getItem("exercises"));
    setSavedStorage(localstate);
  }, []);

  // !Fügt sie zu Favorten hinzu
  const setFav = () => {
    const newTodos = [...savedStorage];
    newTodos[props.index].favorite = true; // Update the favorite property

    setSavedStorage(newTodos);
    localStorage.setItem("exercises", JSON.stringify(newTodos));
  };

  return (
    <div className="card">
      <img src={props.img} alt="übungsbild" />
      <h3>{props.name}</h3>
      <Button size="large">Show More</Button>
      {savedStorage?.[props.index].favorite ? (
        <StarIcon />
      ) : (
        <StarBorderIcon onClick={setFav} />
      )}
    </div>
  );
};

export default SingleCard;
