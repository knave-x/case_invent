import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../service/apiService";

const MovieCard = ({ movie }) => {
  const [searchId, setSearchId] = useState("");
  const searchMovieById = async () => {
    const data = await apiService.getMovieById(searchId);
    setSearchId(data.Search);
    console.log("searchMovieById  :", data);
  };
  useEffect(() => {
    searchMovieById();
  }, []);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/moviedetail/${movie.imdbID}`);
  };
  return (
    <div className="movie" onClick={clickHandler}>
      <div>
        <p>{movie.Year} </p>
      </div>
      <div>
        {/* <img src={movie.Poster} alt={movie.Title}/> */}
        <img
          src={movie.Poster ? movie.Poster : `https://via.placeholder/400`}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3> {movie.Title}</h3>
        <span>{movie.Year}</span>
        <br></br>
        <span>imdbID: {movie.imdbID}</span>
      </div>
    </div>
  );
};
export default MovieCard;
