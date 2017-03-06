import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signin from './components/authentication/signin.js'
import Signup from './components/authentication/signup.js'
import Signout from './components/authentication/signout.js'
import Main from './components/main.js'
import Data from './components/data.js'
import Landing from './components/landing.js'
import RequireAuth from './components/authentication/requireAuth.js'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import '../public/styles.css'
import '../public/bootstrap/css/bootstrap.css'

const token = localStorage.getItem('token');
var auth = token ? true : false;

ReactDOM.render(
  <Router history={browserHistory}>
  		<Route path='/' component={App} routerProps={auth}>
  		<IndexRoute component={Landing} />
  			<Route path='signin' component={Signin} />
  			<Route path='signup' component={Signup} />
  			<Route path='main' component={RequireAuth(Main)} />
        <Route path='signout' component={Signout} />
        <Route path='data' component={RequireAuth(Data)} />
  		</Route>
  </Router>
  ,
  document.getElementById('root')
);
