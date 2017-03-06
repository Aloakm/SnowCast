import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
  }

  handleChange(e) {
    this.setState({val:e.target.value})
  }


  handleSubmit(e){
    e.preventDefault()
    this.props.postComment(this.state.val)
    this.setState({ val: '' })
  }

  render() {
    return(
      <div className="searchbar">
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form-control" 
          placeholder="Enter your comment here" 
          type="text" 
          onChange={this.handleChange.bind(this)}
          value={this.state.val}/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      </div>
    )
  }

}