import React, { Component } from 'react';

export default class Widget extends Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Add to Favorites</h3>
        </div>
      </div>
    )
  }
}