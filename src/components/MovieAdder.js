import React from 'react';

class MovieAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }
    
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.searchTMDB(this.state.input)

  }

  changeHandler(event) {
    this.setState({input:event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" value={this.state.input} placeholder="add movie title here" onChange={this.changeHandler}></input>
        <button>Search</button>
      </form>
    )
  }
}



export default MovieAdder;