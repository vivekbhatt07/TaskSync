import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Tasks, Metrics } from "./Pages";

const App = () => {
  return (
    <div className="bg-50 dark:bg-darkModeOne min-h-screen dark:text-50 transition-all duration-500">
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </div>
  );
};

export default App;
