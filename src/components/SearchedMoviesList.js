import React from 'react';
import SearchedMovieEntry from './SearchedMovieEntry.js'

var SearchedMoviesList = (props) => {
  if (props.searchedMovies.length === 0) {
    return <div></div>
  }else {
    return (
      <div className="searchResults">
        {props.searchedMovies.map(movie => <SearchedMovieEntry movie={movie} addClick={props.addClick}/>)}
      </div>
    )
  }
}

export default SearchedMoviesList