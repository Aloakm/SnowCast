import React, { Component } from 'react';

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
		this.props.fetch(this.state.val)
		this.setState({ val: '' })
	}
	render() {
		return(
			<div className="searchbar">
			<form className="form-inline my-2 my-md-0" onSubmit={this.handleSubmit.bind(this)}>
  			<input className="form-control mr-sm-2" 
	      	placeholder="Search" 
	      	type="text" 
	      	onChange={this.handleChange.bind(this)}
	      	value={this.state.val}/>
      	<button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
      </div>
		)
	}

}