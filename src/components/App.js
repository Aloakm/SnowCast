import React, { Component } from 'react';
import Header from './header/header'
import axios from 'axios'
import Signin from './authentication/signin'
import Signup from './authentication/signup'
import Signout from './authentication/signout.js'
import {browserHistory} from 'react-router'
import config from './config'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: props.route.routerProps[0],
      signinErr: false,
      data: {1:1}, 
      username: props.route.routerProps[1]
    }
  }


  renderChildren(props, state, context) {
    return React.Children.map(props.children, child => {
      if(child.type === Signup) {
        return React.cloneElement(child, {
          authenticated: state.authenticated,
          signup: context.signup.bind(context),
          errMess: state.signupErr
        })
      } else if(child.type === Signin) {
        return React.cloneElement(child, {
          authenticated: state.authenticated,
          signin: context.signin.bind(context),
          errMess: state.signinErr
        })
      } else if(child.type === Signout) {
        return React.cloneElement(child, {
          signout: context.signout.bind(context)
        })
      } else if(child.type.name === "RequireAuth") {
        return React.cloneElement(child, {
          authenticated: state.authenticated,
          data: this.state.data,
          username: this.state.username,
          fetch: this.fetchWeatherData.bind(this)
        })
      } else {
        return child
      }
    })
  }

  signup(email, username, password) {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    axios.post(`${config.server}/signup`, {email, username, password}).then(res => {
      this.setState({ authenticated: true, signupErr: false, username: username})
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', username)
      browserHistory.push('/main')
    }).catch(e => {
      var signupErr = e.response.data.error
      this.setState({ signupErr })
    })
  }

  signout() {
    this.setState({authenticated: false});
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  signin(username, password) {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    axios.post(`${config.server}/signin`, {username, password}).then(res => {
      this.setState({authenticated: true, signinErr: false, username: username})
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', username)
      browserHistory.push('/main')
    }).catch(e => {
      this.setState({signinErr: true})
    })
  }

  fetchWeatherData(loc) {
    browserHistory.push('/data')
    this.setState({data: {1:1}})
    axios.get(`${config.server}/data/${loc}`, {
      headers:{authorization: localStorage.getItem('token')}
    }).then(res => {
      this.setState({data: res.data})
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <div>
        <Header authenticated={this.state.authenticated} fetch={this.fetchWeatherData.bind(this)}/>
        <br />
        {this.renderChildren(this.props, this.state, this)}
      </div>
    );
  }
}

export default App;
