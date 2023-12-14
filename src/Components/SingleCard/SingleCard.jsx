import { Button } from "@mui/material";
import "./SingleCard.css";

const SingleCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="übungsbild" />
      <h3>{props.name}</h3>
      <Button size="large">Show More</Button>
    </div>
  );
};

export default SingleCard;
