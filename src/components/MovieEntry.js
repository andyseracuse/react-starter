import React from 'react';

function MovieList(props) {
  return (
    <div className="movieEntry">
        <h3 className="movieTitle"> {props.movie.title}</h3> 
    </div>
  )
}

export default MovieList