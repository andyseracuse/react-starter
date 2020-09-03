import React from 'react';
import InfoPane from './InfoPane.js'

class MovieEntry extends React.Component {
  
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
    return (<div className="movieEntry" onClick={this.expand}>
        <h3 className="movieTitle"> {this.props.movie.title}</h3> 
        <InfoPane changeWatched={this.props.changeWatched} movie={this.props.movie} expanded={this.state.expanded}/>
    </div>)
  }
}

export default MovieEntry