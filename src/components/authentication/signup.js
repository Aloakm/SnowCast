import React, { Component } from 'react';

export default class Signup extends Component {	
	constructor(props) {
		super(props)
		this.state={
			email: '',
			username: '',
			password: ''
		}
	}

	renderAlert() {
	    if (this.props.errMess) {
	      return(
	        <div className="alert alert-danger">
	          <strong>{this.props.errMess}</strong>
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
		var {email, username, password} = this.state
		this.props.signup(email, username, password)
		this.setState({
			email: '',
			username: '',
			password: ''
		});
	}

	render() {
		return (
		<form onSubmit={this.handleSubmit.bind(this)} className='up-in'>
			<fieldset className="form-group">
				<label>Email:</label>
				<input name="email"
				 			className="form-control" 
				 			type="email"
				 			value={this.state.email} 
				 			required
				 			onChange={this.handleChange.bind(this)}
				 />
			</fieldset>
			<fieldset className="form-group">
				<label>Username:</label>
				<input name="username" 
							className="form-control" 
							value={this.state.username}
							required
							onChange={this.handleChange.bind(this)}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Password:</label>
				<input name="password" 
							className="form-control" 
							value={this.state.password}
							type="password"
							required
							onChange={this.handleChange.bind(this)}
				/>
			</fieldset>
			{this.renderAlert()}
			<button action='submit' className='btn btn-primary'>Sign Up</button>
		</form>
		)
	}
}
