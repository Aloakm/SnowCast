import React, { Component } from 'react';

export default class Widget extends Component{
  constructor(props) {
    super(props);

  }

  getHourIndex() {
    var now = new Date().getHours()
    var hourIndex = now/3
    return Math.floor(hourIndex)
  }

  render() {
    var hour = this.getHourIndex();
    var baseWeather = this.props.data.weather[0].hourly[hour].bottom[0].tempF
    var baseWeatherIcon = this.props.data.weather[0].hourly[hour].bottom[0].weatherIconUrl[0].value
    var baseWeatherDesc = this.props.data.weather[0].hourly[hour].bottom[0].weatherDesc[0].value
    var chanceOfSnow = this.props.data.weather[0].chanceofsnow
    var windSpeed = this.props.data.weather[0].hourly[hour].bottom[0].windspeedMiles
    
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Forecast</h3>
        </div>
        <div className="panel-body">
          <div className="col-md-6" style={{textAlign: "center"}}>{baseWeather} F<br/>
          {baseWeatherDesc}
          <p />
          <img src={baseWeatherIcon} alt={baseWeatherDesc}/>
          </div>

          <div className="col-md-6" style={{textAlign: "center"}}>
          {chanceOfSnow}%
          <p style={{fontSize: '10px'}}>Chance of Snow</p>
          {windSpeed} mph
          <p style={{fontSize: '10px'}}>Wind Speed</p>
          </div>


        </div>
      </div>
    )
  }
}