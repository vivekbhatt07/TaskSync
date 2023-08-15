import React from "react";
import { tabData } from "./TabData";
import TabItem from "./TabItem";

const Tab = () => {
  return (
    <ul className="bg-[#ddd] flex">
      {tabData.map((currentTab) => {
        return <TabItem key={currentTab.id} {...currentTab} />;
      })}
    </ul>
  );
};

export default Tab;
