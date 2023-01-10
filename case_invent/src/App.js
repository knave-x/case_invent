import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
// import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviedetail/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
