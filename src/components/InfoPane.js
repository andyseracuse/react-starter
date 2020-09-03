import React from 'react';

function InfoPane(props) {
  if(props.expanded === true) {
    return (
    <div>
      <div>Release Date: {props.movie.release_date}</div>
      <div>Popularity: {props.movie.popularity}</div>
      <div>Average Rating: {props.movie.vote_average}</div>
      <div>Synopsis: {props.movie.overview}</div>
    </div>
    )
  }else {
    return null
  }
}

export default InfoPane