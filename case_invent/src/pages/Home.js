import { useState, useEffect } from "react";
import "../App.css";
import React from "react";
import MovieCard from "../components/MoviesCard";
import SearchIcon from "../search.svg";
import apiService from "../service/apiService";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSeatchTerm] = useState("");
  const [searchYears, setSearchYears] = useState("");
  const [searchType, setSearchType] = useState("");

  const searchMovies = async () => {
    // const response = await fetch(`${API_URL}&s=${title ? title : "Undefined"}`);

    // const data = await response.json();
    const data = await apiService.getMoviesByFilter(
      searchTerm,
      searchYears,
      searchType
    );
    setMovies(data.Search);
    console.log("data :", data);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  const handleReset = () => {};

  return (
    <div className="app">
      <h1> MovieLang </h1>
      <div>
        <label className="control-label" htmlFor="t">
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

        <label className="control-label" htmlFor="y">
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

        <select
          name="Type"
          style={{ width: "100px" }}
          onChange={(e) => {
            setSearchType(e.target.value);
          }}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>

        <button
          id="search-by-title-button"
          type="button"
          className="btn-sm btn-primary"
          onClick={() => searchMovies(searchTerm)}
        >
          Search
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

        <img src={SearchIcon} alt="search" onClick={() => searchMovies()}></img>
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
      <div>
        {/* <Routes>
          <Route path="/moviedetail/:id" element={<MovieDetails />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default Home;
