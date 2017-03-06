import React, { Component } from 'react';
import Tabs from './favorite-tabs'

export default class Favorites extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Favorites</h3>
        </div>
        <div className="panel-body">
          <Tabs />
        </div>
      </div>
    )    
  }
}