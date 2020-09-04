import React from 'react';

function InfoPane(props) {
  var imageURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + props.movie.poster_path
  if(props.expanded === true) {
    return (
    <div className="infoPaneContainerContainer">
      <div className="infoPaneContainer">
        <div className="MovieEntryInfo">
          <div className="infopeice"><b>Release Date:</b> {props.movie.release_date}</div>
          <div className="infopeice"><b>Popularity:</b> {props.movie.popularity}</div>
          <div className="infopeice"><b>Average Rating:</b> {props.movie.vote_average}</div>
          <div className="infopeice"><b>Synopsis:</b> {props.movie.overview}</div>
        </div>
        <img src={imageURL}/>
      </div>
    </div>
    )
  }else {
    return null
  }
}

export default InfoPane