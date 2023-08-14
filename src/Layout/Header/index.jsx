import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import "./Header.css";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <header>
      <button
        className={`mode ${isDarkTheme ? "dark" : "light"}-mode`}
        variant="contained"
        onClick={() => toggleTheme(!isDarkTheme)}
        aria-label="Theme Toggle Button"
      >
        <span
          className={`circle ${isDarkTheme ? "dark" : "light"}-circle`}
        ></span>
      </button>
    </header>
  );
};

export default Header;
