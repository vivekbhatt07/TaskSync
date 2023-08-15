import React from "react";
import Header from "../Header";
import Main from "../Main";
import Tab from "../Tab";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <Tab />
      <Main mainContent={children} />
    </>
  );
};

export default PageWrapper;
