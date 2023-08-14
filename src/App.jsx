import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Tasks, Metrics } from "./Pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </div>
  );
};

export default App;
