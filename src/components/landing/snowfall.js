import React, { Component } from 'react';
import Tabs from './snowfall-tabs'

export default class Snowfall extends Component {
	render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Recent Snowfall</h3>
        </div>
        <div className="panel-body">
          <Tabs name={'Tahoe Donner'} snow={'30"'}/>
          <hr/>
          <Tabs name={'Northstar California'} snow={'26"'}/>
          <hr/>
          <Tabs name={'Homewood Mountain Resort'} snow={'24"'}/>
          <hr/>
          <Tabs name={'Diamond Peak'} snow={'21"'}/>
          <hr/>
          <Tabs name={'Bear Valley'} snow={'4"'}/>
        </div>
      </div>
    )    
	}
}