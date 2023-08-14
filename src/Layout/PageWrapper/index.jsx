import React from "react";
import Header from "../Header";
import Main from "../Main";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <Main mainContent={children} />
    </>
  );
};

export default PageWrapper;
