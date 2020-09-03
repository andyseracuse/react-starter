import React from 'react';
import MovieEntry from './MovieEntry.js';

var MovieList = (props) => {
  return props.displayedMovies.map(movie => <MovieEntry movie={movie} changeWatched={props.changeWatched}/>)
}

export default MovieList

/* .props.movies.map((movie) => (
  <div className="movieEntry">
  <h3 className="movieTitle"> {movie.title}</h3>
  </div>
  ))}
  </div>
) */

