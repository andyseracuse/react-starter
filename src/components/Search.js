import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query:''
    }
    
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.searchClick (this.state.query)
  }

  changeHandler(event) {
    if (this.state.query.length === 1) {
      this.props.resetList()
    }
    this.setState({query:event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" value={this.state.query} placeholder='search added movies...' onChange={this.changeHandler}></input>
        <button>Go!</button>
      </form>
    )
  }
}



export default Search;
