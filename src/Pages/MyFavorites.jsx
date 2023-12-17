import Header from "../Components/Header/Header";
import MyFavoritesEx from "../Components/MyFavoritesEx/MyFavoritesEx";
import Nav from "../Components/Nav/Nav";

const MyFavorites = () => {
  return (
    <>
      <Nav />
      <Header
        text="My Favorites"
        description="Find your favorite exercises at a glance! Our overview section makes it easy to locate and revisit the workouts you love the most."
      />
      <div className="content">
        <MyFavoritesEx />
      </div>
    </>
  );
};

export default MyFavorites;
