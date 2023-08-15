import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./TabItem.css";
import { useTheme } from "../../../Context/ThemeContext";

const TabItem = (props) => {
  const { isDarkTheme } = useTheme();
  const { label, reach, tabImg } = props;
  return (
    <Button sx={{ padding: "0" }}>
      <NavLink
        to={reach}
        className="flex items-center px-4 py-2"
        style={({ isActive }) => {
          return {
            background: isActive ? "#3b82f6" : "transparent",
            color: isActive ? "#fff" : isDarkTheme ? "#fff" : "#000",
          };
        }}
      >
        <span>{label}</span>
      </NavLink>
    </Button>
  );
};

export default TabItem;
