import { Button } from "@mui/material";

const SingleCard = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <Button size="large">Learn More</Button>
    </div>
  );
};

export default SingleCard;
