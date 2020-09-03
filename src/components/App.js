import React from 'react';
import MovieList from './MovieList.js'
import Search from './Search.js'
import '../main.css'
import MovieAdder from './MovieAdder.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[],
      filteredMovies: null
    }

    this.searchClick =this.searchClick.bind(this);
    this.resetList = this.resetList.bind(this);
    this.addClick = this.addClick.bind(this);
  }
 

  resetList (query){
    this.setState({filteredMovies: null})
  }

  addClick(input) {
    var updatedMovies = this.state.movies;
    updatedMovies.push({title: input});
    this.setState({movies:updatedMovies});
  }

  searchClick(query) {
    var queryWords = query.toLowerCase().split(' ');
    var matches =[]
    for (var i = 0; i < this.state.movies.length; i++) {
      var movieTitle = this.state.movies[i].title.toLowerCase();
      var movieWords = movieTitle.split(' ')
      for (var j = 0; j < movieWords.length; j++) {
        if (queryWords.includes(movieWords[j])) {
          matches.push(this.state.movies[i]);
          break;
        }
      }
    }
    if (matches.length === 0) {
      matches = [{title:'No movies Found'}]
    }  
    this.setState({filteredMovies:matches}) 
  }
  render(){
    return(
    <div>
      <div>
        <MovieAdder addClick={this.addClick}/>
      </div>
      <div>
        <Search searchClick={this.searchClick} resetList={this.resetList}></Search>
      </div>
      <div>
        <MovieList filteredMovies = {this.state.filteredMovies} movies = {this.state.movies}/>
      </div>
    </div>
  )}
}

export default App;
