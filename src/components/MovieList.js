import React from 'react';
import MovieEntry from './MovieEntry.js';

var MovieList = (props) => {
  if(props.filteredMovies === null){
    if(props.movies.length === 0) {
      return <div><h3>No Movies Added</h3></div>
    }else {
      return props.movies.map(movie => <MovieEntry movie={movie} />)
    }
  } else{
    return props.filteredMovies.map(movie => <MovieEntry movie={movie} />) 
  }
}
export default MovieList

/* .props.movies.map((movie) => (
  <div className="movieEntry">
  <h3 className="movieTitle"> {movie.title}</h3>
  </div>
  ))}
  </div>
) */

