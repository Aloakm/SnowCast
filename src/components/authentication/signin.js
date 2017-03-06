import React, { Component } from 'react';

export default class Signin extends Component {
	constructor(props) {
		super(props)
		this.state={
			username: '',
			password: ''
		}
	}

	renderAlert() {
    if (this.props.errMess) {
      return(
        <div className="alert alert-danger">
          <strong>Incorrect login info</strong>
        </div>
      )
    }
  }

	handleChange(event) {
		var {name, value} = event.target
		var state = {};
		state[name] = value;
		this.setState(state)
	}

	handleSubmit(e) {
		e.preventDefault()
		var {username, password} = this.state
		this.props.signin(username, password)
		this.setState({
			username: '',
			password: ''
		});
	}

	render() {
		
		return (
		<form onSubmit={this.handleSubmit.bind(this)} className='up-in'>
			<fieldset className="form-group">
				<label>Username:</label>
				<input name="username"
							className="form-control" 
							value={this.state.username}
							required
							onChange={this.handleChange.bind(this)}/>
			</fieldset>
			<fieldset className="form-group">
				<label>Password:</label>
				<input name="password"
							className="form-control" 
							value={this.state.password}
							type="password"
							required
							onChange={this.handleChange.bind(this)}/>
			</fieldset>
			{this.renderAlert()}
			<button action='submit' className='btn btn-primary'>Sign In</button>
		</form>
		)
	}
}
