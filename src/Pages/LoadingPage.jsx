import { useContext, useEffect } from "react";
import { LoadingContext } from "../Context/Context";
import FetchData from "../Components/fetchAllData";

const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <section>
      <h1>Fetching datadd..</h1>
      <FetchData />
    </section>
  );
};

export default LoadingPage;
