import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../service/apiService";
import Table from "react-bootstrap/Table";

const MovieDetails = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  const searchMovieById = async () => {
    const data = await apiService.getMovieById(id);
    setMovie(data);

    console.log("searchMovieById  :", data);
  };
  useEffect(() => {
    searchMovieById();
  }, []);

  if (!movie) {
    return <div>Loading</div>;
  }
  return (
    <div className="movie">
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
        <h5>-Actor : {movie.Actors}</h5>

        <h5>-imdb Ratings : {movie.imdbRating}</h5>
        <h5>-Director : {movie.Director}</h5>
        <h5>-Time : {movie.Runtime}</h5>
        <h5>-Genre : {movie.Genre}</h5>
      </div>
    </div>
  );
};

export default MovieDetails;
