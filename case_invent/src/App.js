import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import MovieCard from "./components/MoviesCard";
import SearchIcon from "./search.svg";
import apiService from "./service/apiService";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);
  const [searchTerm, setSeatchTerm] = useState("");
  const [searchYears, setSearchYears] = useState("");
  const searchMovies = async (values) => {
    // const response = await fetch(`${API_URL}&s=${title ? title : "Undefined"}`);

    // const data = await response.json();
    const data = await apiService.homeMovie(values);
    setMovies(data.Search);
    console.log("data :", data);
   
  };

  const searchYear = async (values) => {
    const data = await apiService.homeYear(values);
    setYears(data.Search);
    console.log("year :", data);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies();
    searchYear()
  }, []);

  // useEffect(() => {
  //   searchYear();
  // }, []);

  // const handleReset =()=>{
  //   setMovies([])
  // }

  return (
    <div className="app">
      <h1> MovieLang </h1>
      <div>
        <label class="control-label" for="t">
          Title:
        </label>
        <input
          type="text"
          className="input-small"
          value={searchTerm}
          onChange={(e) => {
            setSeatchTerm(e.target.value);
          }}
        />
        &nbsp;&nbsp;
        <label class="control-label" for="y">
          Year:
        </label>
        <input
          type="text"
          id="y"
          name="y"
          className="input-small"
          style={{ width: "100px" }}
          value={searchYears}
          onChange={(e) => {
            setSearchYears(e.target.value);
          }}
        />
        &nbsp;&nbsp;
        <label class="control-label">Plot:</label>
        <select name="plot" style={{ width: "100px" }}>
          <option value="" selected="">
            Short
          </option>
          <option value="full">Full</option>
        </select>
        &nbsp;&nbsp;
        <label class="control-label">Response:</label>
        &nbsp;&nbsp;
        <button
          id="search-by-title-button"
          type="button"
          class="btn-sm btn-primary"
          onClick={() => searchMovies(searchTerm)}
        >
          Search
        </button>
        <button id="search-by-title-reset" type="reset" class="btn-sm">
          Reset
        </button>
      </div>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSeatchTerm(e.target.value);
          }}
        ></input>

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>
      {movies?.length > 0 ? (
        <div className="Container">
          {movies.map((movie, i) => (
            <MovieCard movie={movie} key={i}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
