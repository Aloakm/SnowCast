import React, { Component } from 'react';
import Widget from './data/widget'
import {BarChart, LineChart} from 'react-easy-chart';
import moment from 'moment';

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0
    }
    this.getAltitudeTemps();
  }

  getDate() {
    var {data} = this.props
    var date = data.weather[this.state.day].date
    return moment(date, "YYYY-MM-DD").format('MMMM DD YYYY')
  }

  makeBarForSnowFall() {
    var {data} = this.props
    var graphData = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length==1 ? '0000' : timeSlot.time.length==4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.snowfall_cm}
    })
    console.log(graphData)
    return graphData
  }

  changeDay(e) {
    if (e.target.name === 'next') {
      this.state.day < 6 ? this.setState({day:this.state.day+1}) : null     
    } else {
      this.state.day > 0 ? this.setState({day:this.state.day-1}) : null   
    }
  }

  getAltitudeTemps() {
    var {data} = this.props
    var graphDataBottom = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length==1 ? '0000' : timeSlot.time.length==4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.bottom[0].tempF}
    })
    var graphDataMid = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length==1 ? '0000' : timeSlot.time.length==4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.mid[0].tempF}
    })
    var graphDataTop = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length==1 ? '0000' : timeSlot.time.length==4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.top[0].tempF}
    })
    return [graphDataBottom, graphDataMid, graphDataTop]
  }

  render() {
    var {data} = this.props
    data = window.temp1 || data
    if (!data.nearest_area) {
        return<div>Loading...</div>
    } else {
      var title = `${data.nearest_area[0].areaName[0].value}, ${data.nearest_area[0].region[0].value}, ${data.nearest_area[0].country[0].value}`
      if (!data.nearest_area[0].region[0].value) title = `${data.nearest_area[0].areaName[0].value}, ${data.nearest_area[0].country[0].value}`
      return (
        <div>
          <h3>{title}</h3>
          <div className="row">
            <div className='col-md-8'>

            <BarChart grid style={{marginLeft: '3px'}} data={this.makeBarForSnowFall()} axes colorBars width={550}/>
                        
            <LineChart yDomainRange={[-30, 60]} height={300} grid style={{marginLeft: '3px'}} data={this.getAltitudeTemps()} axes colorBars width={550}/>
            <button onClick={this.changeDay.bind(this)} name="prev">prev</button>
            <span style={{position:'absolute', left: '267px'}}>{this.getDate()}</span>
            <button onClick={this.changeDay.bind(this)} name="next" style={{position:'absolute',left: '525px'}}>next</button>

            </div>

            <div className='col-md-4'>
              <Widget data={data}/>
            </div>

          </div>    
          <h3>Comments</h3> 
        </div>
      )
    }
  }
}