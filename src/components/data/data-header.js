import React, { Component } from 'react';

export default class DataHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <a onClick={()=>this.props.changeChart('snowfall')}>Snowfall</a>{' • '} 
            <a onClick={()=>this.props.changeChart('weather-bot')}>Weather-Bottom</a>{' • '}
            <a onClick={()=>this.props.changeChart('weather-mid')}>Weather-Mid</a>{' • '}
            <a onClick={()=>this.props.changeChart('weather-top')}>Weather-Top</a>
          </h3>
        </div>
      </div>


    )
  }
}