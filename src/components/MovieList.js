import React from 'react';
import MovieEntry from './MovieEntry.js';

var MovieList = (props) => {
  if(props.filteredMovies === null){
    if(props.toWatch.length === 0) {
      return <div><h3>No Movies Added</h3></div>
    }else {
      return props.toWatch.map(movie => <MovieEntry changeWatched={props.changeWatched} movie={movie} />)
    }
  } else{
    return props.filteredMovies.map(movie => <MovieEntry changeWatched={props.changeWatched} movie={movie} />) 
  }
}
export default MovieList