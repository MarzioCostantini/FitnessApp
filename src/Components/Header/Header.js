import "./Header.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ text, description }) => {
  return (
    <header>
      <div>
        <h1>{text}</h1>
        <p>{description}</p>
      </div>
      <DarkModeIcon sx={{ fontSize: 22 }} />
    </header>
  );
};

export default Header;
