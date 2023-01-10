import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../service/apiService";

const MovieDetails = () => {
  let { id } = useParams();
  const [searchId, setSearchId] = useState("");
  const searchMovieById = async () => {
    const data = await apiService.getMovieById(id);
    setSearchId(data.Search);
    console.log("searchMovieById  :", data);
  };
  useEffect(() => {
    searchMovieById();
  }, []);
  return <div>MovieDetails</div>;
};

export default MovieDetails;
