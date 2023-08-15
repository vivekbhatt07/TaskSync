import React from "react";
import { tabData } from "./TabData";
import TabItem from "./TabItem";

const Tab = () => {
  return (
    <ul className="bg-200 flex dark:bg-600">
      {tabData.map((currentTab) => {
        return <TabItem key={currentTab.id} {...currentTab} />;
      })}
    </ul>
  );
};

export default Tab;
