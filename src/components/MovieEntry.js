import React from 'react';

class MovieEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewState: "toWatch",
      offState: "watched"
    }
    
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.props.changeWatched(this.props.movie, this.state.offState, this.state.viewState)
    if (this.state.viewState === "toWatch") {
      this.setState({viewState: "watched", offState:"toWatch"})
    } else {
      this.setState({viewState: "toWatch", offState:"watched"})
    }
  }

  render () {
    console.log('props movieEnter', this.props)
    return(
      <div className="movieEntry">
          <h3 className="movieTitle"> {this.props.movie.title}</h3> 
          <button onClick={() => this.props.changeWatched(this.props.movie, this.state.offState, this.state.viewState)}>Watched</button>
      </div>
    )
  }
}

export default MovieEntry