import React from 'react';
import InfoPane from './InfoPane.js'

class SearchedMovieEntry extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }

    this.expand = this.expand.bind(this);
  }
  
  expand(){
    var currentExpansion = this.state.expanded
    this.setState({expanded: !currentExpansion})
  }

  render () {
    return (<div className="movieEntry">
      <div className="searchedMovieSmall">
        <button onClick={() => this.props.addClick (this.props.movie)}>Add Movie</button>
        <h3 className="movieTitle" > {this.props.movie.title}</h3> 
        <button onClick={this.expand}>More Info</button>
      </div>
        <InfoPane changeWatched={this.props.changeWatched} movie={this.props.movie} expanded={this.state.expanded}/>
    </div>)
  }
}

export default SearchedMovieEntry