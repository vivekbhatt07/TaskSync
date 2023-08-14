import React from "react";
import Header from "../Header";
import Main from "../Main";
import Tab from "../Tab";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <Main mainContent={children} />
      <Tab />
    </>
  );
};

export default PageWrapper;
