import React, { Component } from 'react';
import Tabs from './snowfall-tabs'

export default class Snowfall extends Component {
	render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">SNOWFALL</h3>
        </div>
        <div className="panel-body">
          <Tabs />
        </div>
      </div>
    )    
	}
}