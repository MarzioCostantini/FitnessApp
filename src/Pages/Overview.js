import ComingSoon from "../Components/comingSoon/ComingSoon";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import { Helmet } from "react-helmet";

const Overview = () => {
  return (
    <>
      <Nav />
      <Header
        text="Overview"
        description="Find your ideal workout easily! Our app categorizes all exercises, making it simple to locate what you need. From strength to cardio, every category is filled with a variety of exercises, ensuring you get the most out of your fitness journey."
      />
      <div className="content"></div>
    </>
  );
};

export default Overview;
