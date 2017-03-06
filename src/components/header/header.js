import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchBar from './searchbar';
import {browserHistory} from 'react-router'

class Header extends Component {
	renderBar() {
		if(this.props.authenticated) {
			return <SearchBar fetch={this.props.fetch}/>
		}
	}
	renderLinks() {
		if(this.props.authenticated) {
			return [
			<li className="nav-item" key={1}>
				<Link to="/main" onClick={()=>browserHistory.push('/main')}>Home</Link>
			</li>,
			<li className="nav-item" key={2}>
				<Link to="/signout">Sign Out</Link>
			</li>
			
			];
			
		} else {
			return [
			<li className="nav-item" key={1}>
				<Link to="/signin">Sign In</Link>
			</li>,
			<li className="nav-item" key={2}>
				<Link to="/signup">Sign Up</Link>
			</li>
			];
		}
		
	}

	render() {
		return (
			<nav className="navbar navbar-inverse bg-inverse">
				<Link to='/' className="navbar-brand">SnowCast</Link>
				<ul className="nav navbar-nav">
					{this.renderLinks()}
					{this.renderBar()}
				</ul>					
			</nav>
			
		)
	}
}

export default Header;