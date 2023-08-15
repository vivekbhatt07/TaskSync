import React from "react";
import { NavLink } from "react-router-dom";
import "./TabItem.css";

const TabItem = (props) => {
  const { label, reach, tabImg } = props;
  return (
    <NavLink to={reach} className="px-4 py-2 flex items-center">
      {/* {tabImg} */}
      <span>{label}</span>
    </NavLink>
  );
};

export default TabItem;
