import React from "react";

const MovieCard= ({movie})=> {

    return(

        <div className='movie'>
            <div>
              <p>{movie.Year } </p>
            </div>
            <div>
              {/* <img src={movie.Poster} alt={movie.Title}/> */}
              <img src={movie.Poster  ? movie.Poster: `https://via.placeholder/400`} alt={movie.Title} />
            </div>
            <div>
              <span>{movie.Type}</span>
              <h3> {movie.Title}</h3>
              <span>{movie.Year}</span>
            </div>
          </div>
    )

}
export default MovieCard