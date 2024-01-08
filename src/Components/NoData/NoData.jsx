import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import "./NoData.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const NoData = () => {
  return (
    <article className="noData">
      <SentimentDissatisfiedRoundedIcon />
      <h4 className="noDataHere">There are no favorites saved yet</h4>
      <Link to="/exercises">
        <Button size="large">Find some</Button>
      </Link>
    </article>
  );
};

export default NoData;
