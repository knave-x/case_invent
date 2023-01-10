import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../service/apiService";
import Table from "react-bootstrap/Table";

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

  return (
    <div>
      MovieDetails
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MovieDetails;
