import React from 'react';

function InfoPane(props) {
  if(props.expanded === true) {
    return (
    <div>
      <div>Year: {props.movie.Year}</div>
      <div>Runtime: {props.movie.Runtime}</div>
      <div>MetaScore: {props.movie.MetaScore}</div>
      <div>imdbRating: {props.movie.imdbRating}</div>
      <button onClick={() => props.changeWatched(props.movie)}>Currently In:{props.movie.watchStatus}, Press to change</button>
    </div>
    )
  }else {
    return <div></div>
  }
}

export default InfoPane