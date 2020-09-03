import React from 'react';
import MovieList from './MovieList.js'
import Search from './Search.js'
import '../main.css'
import MovieAdder from './MovieAdder.js';
import WatchButton from './WatchButton.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[],
      displayedMovies: [],
      view:"To Watch"
    }

    this.searchClick =this.searchClick.bind(this);
    this.resetList = this.resetList.bind(this);
    this.addClick = this.addClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeWatched = this.changeWatched.bind(this);
  }
 

  resetList (query){
    var allMovies = this.state.movies.slice();
    this.setState({displayedMovies: allMovies})
  }
  searchClick(query) {
    var queryWords = query.toLowerCase().split(' ');
    var matches =[]
    var allDisplayedMovies = this.state.displayedMovies.slice();
    for (var i = 0; i < allDisplayedMovies.length; i++) {
      var movieTitle = allDisplayedMovies[i].title.toLowerCase();
      var movieWords = movieTitle.split(' ')
      for (var j = 0; j < movieWords.length; j++) {
        if (queryWords.includes(movieWords[j])) {
          matches.push(allDisplayedMovies[i]);
          break;
        }
      }
    }
    if (matches.length === 0) {
      matches = [{title:'No movies Found'}]
    }  
    this.setState({displayedMovies:matches}) 
  }
  reRenderMovieList() {
    console.log('movies on rerender', this.state.movies)
    var newDisplayedMovies = []
    for(var i = 0; i < this.state.movies.length; i++) {
      if(this.state.movies[i].watchStatus === this.state.view) {
        newDisplayedMovies.push(this.state.movies[i])
      }
    }
    this.setState({displayedMovies: newDisplayedMovies})
  }

  addClick(input) {
    var updatedMovies = this.state.movies.slice();
    updatedMovies.push({title: input, watchStatus:'To Watch'});
    this.setState({movies:updatedMovies}, this.reRenderMovieList);
    // if it doesn't rerender when something is added there should be functionality which handles
    // putting it on the to watch view
  }
  changeWatched (movie) {
    var updatedMovies = this.state.movies.slice()
    for(var i = 0; i < updatedMovies.length; i++) {
      if (updatedMovies[i].title = movie.title) {
        if (updatedMovies[i].watchStatus === 'Watched') {
          updatedMovies[i].watchStatus = "To Watch"
        } else{
          updatedMovies[i].watchStatus = "Watched"
        }
      }
    }
    this.setState({movies:updatedMovies},this.reRenderMovieList)
  }



  changeView(buttonPressed) {
    var newState;
    if(buttonPressed !== this.state.view) {
      this.setState({view:buttonPressed})
      newState = buttonPressed
      var updatedDisplayedMovies = [];
      for (var i = 0; i < this.state.movies.length; i++) {
        if (this.state.movies[i].watchStatus === buttonPressed) {
          updatedDisplayedMovies.push(this.state.movies[i])
        }
      }
      this.setState({displayedMovies:updatedDisplayedMovies})
    }
  }

  componentDidMount() {
    var allMovies = this.state.movies.slice()
    this.setState({displayedMovies:allMovies})
  }

  render(){
    return(
    <div className="movieListContainer">
      <div>
        <MovieAdder movies={this.state.movies} addClick={this.addClick}/>
      </div>
      <div className="watch-search-container">
        <div className="watch-buttons-container">
          <WatchButton changeView={this.changeView}buttonType="Watched"/>
          <WatchButton changeView={this.changeView}buttonType="To Watch"/>
        </div>
        <Search searchClick={this.searchClick} resetList={this.resetList}></Search>
      </div>
      <div>
        <MovieList displayedMovies={this.state.displayedMovies} changeWatched={this.changeWatched}/>
      </div>
    </div>
  )}
}

export default App;
