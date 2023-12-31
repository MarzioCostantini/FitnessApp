import "./Header.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";

const Header = ({ text, description }) => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <header>
      <div>
        <h1>{text}</h1>
        <p>{description}</p>
      </div>

      {/* {theme ? (
        <LightModeIcon
          sx={{ fontSize: 22 }}
          onClick={() => setTheme((state) => !state)}
        />
      ) : (
        <DarkModeIcon
          sx={{ fontSize: 22 }}
          onClick={() => setTheme((state) => !state)}
        />
      )} */}
    </header>
  );
};

export default Header;
