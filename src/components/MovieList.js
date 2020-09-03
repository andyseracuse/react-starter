import React from 'react';
import MovieEntry from './MovieEntry.js';

var MovieList = (props) => {
  return props.displayedMovies.map(movie => <MovieEntry movie={movie} changeWatched={props.changeWatched}/>)
}

export default MovieList