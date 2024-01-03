import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./NoData.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const NoData = () => {
  return (
    <article className="noData">
      <SentimentVeryDissatisfiedIcon />
      <h2>There are no favorites saved yet</h2>
      <Link to="/exercises">
        <Button size="large">Find some</Button>
      </Link>
    </article>
  );
};

export default NoData;
