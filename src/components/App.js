import React from 'react';
import MovieList from './MovieList.js'
import Search from './Search.js'
import '../main.css'
import MovieAdder from './MovieAdder.js';
import WatchButton from './WatchButton.js';
import $ from '../../node_modules/jquery'
import SearchedMoviesList from './SearchedMoviesList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[],
      displayedMovies: [],
      view:"To Watch",
      searchedMovies: []
    }

    this.searchClick =this.searchClick.bind(this);
    this.resetList = this.resetList.bind(this);
    this.addClick = this.addClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeWatched = this.changeWatched.bind(this);
    this.searchTMDB = this.searchTMDB.bind(this);
  }

  searchTMDB(query) {
    var htmlQuery = query.split(' ').join('+')
    $.get('https://api.themoviedb.org/3/search/movie', {
      query: htmlQuery, api_key:'85ba32a035cd1f9de6ef5804579c88cd'}
      ,(data) => {this.setState({searchedMovies: data.results}, console.log(data.results))})
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

  addClick(movie) {
    var updatedMovies = this.state.movies.slice();
    movie.watchStatus = 'To Watch';
    updatedMovies.push(movie);
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
        <MovieAdder searchTMDB={this.searchTMDB} movies={this.state.movies}/>
        <SearchedMoviesList addClick={this.addClick} searchedMovies={this.state.searchedMovies}/>
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
