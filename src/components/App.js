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
      toWatch:[{title:'dogs'}],
      filteredMovies: null,
      view:"To Watch",
      watched:[],
    }

    this.searchClick =this.searchClick.bind(this);
    this.resetList = this.resetList.bind(this);
    this.addClick = this.addClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeWatched = this.changeWatched.bind(this);
  }
 
  changeWatched(addedMovie, toList, fromList) {
    var updatedFromList = this.state[fromList].filter(movie => movie.title !== addedMovie.title)
    var updatedToList = this.state[toList].slice()
    
    console.log('this.state[watched]', this.state['watched'])
    console.log('toList', toList)
    updatedtoList.push(addedMovie);
    console.log('updatedToList', updatedToList)
    this.setState({toList:updatedToList, fromList:updatedFromList})
  }
  resetList (query){
    this.setState({filteredMovies: null})
  }

  addClick(input) {
    var updatedMovies = this.state.toWatch;
    updatedMovies.push({title: input});
    this.setState({toWatch:updatedMovies});
  }
//need to fix the search so that it searches through either the watched or to watch depending on the view
  searchClick(query) {
    var queryWords = query.toLowerCase().split(' ');
    var matches =[]
    for (var i = 0; i < this.state.toWatch.length; i++) {
      var movieTitle = this.state.toWatch[i].title.toLowerCase();
      var movieWords = movieTitle.split(' ')
      for (var j = 0; j < movieWords.length; j++) {
        if (queryWords.includes(movieWords[j])) {
          matches.push(this.state.toWatch[i]);
          break;
        }
      }
    }
    if (matches.length === 0) {
      matches = [{title:'No movies Found'}]
    }  
    this.setState({filteredMovies:matches}) 
  }
  changeView(buttonPressed) {
    if(buttonPressed !== this.state.view) {
      this.setState({view:buttonPressed})
    }
  }
  render(){
    console.log('watched', this.state.watched)
    console.log('towatch', this.state.toWatch)
    return(
    <div className="movieListContainer">
      <div>
        <MovieAdder addClick={this.addClick}/>
      </div>
      <div className="watch-search-container">
        <div className="watch-buttons-container">
          <WatchButton changeView={this.changeView}buttonType="Watched"/>
          <WatchButton changeView={this.changeView}buttonType="To Watch"/>
        </div>
        <Search searchClick={this.searchClick} resetList={this.resetList}></Search>
      </div>
      <div>
        <MovieList filteredMovies = {this.state.filteredMovies} changeWatched={this.changeWatched} toWatch = {this.state.toWatch}/>
      </div>
    </div>
  )}
}

export default App;
