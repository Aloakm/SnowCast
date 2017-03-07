/* eslint-disable */
import React, { Component } from 'react';
import Widget from './data/widget';
import Addfavs from './data/addfavs';
import DataHeader from './data/data-header';
import Comments from './data/comments';
import {BarChart, LineChart} from 'react-easy-chart';
import moment from 'moment';

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      showChart: 'snowfall'
    }
    this.getAltitudeTemps();
  }

  changeChart(chart) {
    this.setState({showChart: chart})
  }

  getDate() {
    var {data} = this.props
    var date = data.weather[this.state.day].date
    return moment(date, "YYYY-MM-DD").format('MMMM DD YYYY')
  }

  makeBarForSnowFall() {
    var {data} = this.props
    if (!data.nearest_area) return;
    var graphData = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length===1 ? '0000' : timeSlot.time.length===4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.snowfall_cm}
    })
    return graphData
  }

  changeDay(e) {
    if (e.target.name === 'next') {
      this.state.day < 6 ? this.setState({day:this.state.day + 1}) : null    
    } else {
      this.state.day > 0 ? this.setState({day:this.state.day - 1}) : null   
    }
  }

  getAltitudeTemps() {
    var {data} = this.props
    if (!data.nearest_area) return;
    var graphDataBottom = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length===1 ? '0000' : timeSlot.time.length===4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.bottom[0].tempF}
    })
    var graphDataMid = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length===1 ? '0000' : timeSlot.time.length===4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.mid[0].tempF}
    })
    var graphDataTop = data.weather[this.state.day].hourly.map(timeSlot => {
      return {x:timeSlot.time.length===1 ? '0000' : timeSlot.time.length===4 ? timeSlot.time : '0'+timeSlot.time, y:timeSlot.top[0].tempF}
    })
    return [graphDataBottom, graphDataMid, graphDataTop]
  }

  renderCharts() {
    var chart;
    switch(this.state.showChart){
      case 'snowfall': 
        chart = <BarChart grid style={{marginLeft: '3px'}} data={this.makeBarForSnowFall()} axes colorBars width={550}/>
        break;
      case 'weather-bot':
        chart = <LineChart yDomainRange={[-20, 70]} height={300} grid style={{marginLeft: '3px'}} data={[this.getAltitudeTemps()[0]]} axes colorBars width={550}/>
        break;
      case 'weather-mid':
        chart = <LineChart yDomainRange={[-20, 70]} height={300} grid style={{marginLeft: '3px'}} data={[this.getAltitudeTemps()[1]]} axes colorBars width={550}/>
        break;
      case 'weather-top':
        chart = <LineChart yDomainRange={[-20, 70]} height={300} grid style={{marginLeft: '3px'}} data={[this.getAltitudeTemps()[2]]} axes colorBars width={550}/>
        break;
      default:
        chart = <BarChart grid style={{marginLeft: '3px'}} data={this.makeBarForSnowFall()} axes colorBars width={550}/>
    }
    return (
      <div>
      {chart}
      <button className="btn btn-primary" onClick={this.changeDay.bind(this)} name="prev">prev</button>
      <span style={{position:'absolute', left: '267px'}}>{this.getDate()}</span>
      <button className="btn btn-primary" onClick={this.changeDay.bind(this)} name="next" style={{position:'absolute',left: '550px'}}>next</button>
      </div>
    )
  }


  render() {
    var {data} = this.props
    if (!data.nearest_area) {
        return<h1>Loading...</h1>
    } else {
      var title = `${data.nearest_area[0].areaName[0].value}, ${data.nearest_area[0].region[0].value}, ${data.nearest_area[0].country[0].value}`
      if (!data.nearest_area[0].region[0].value) title = `${data.nearest_area[0].areaName[0].value}, ${data.nearest_area[0].country[0].value}`
      return (
        <div>
          <h3>{title}</h3>
          <div className="row">
            <div className='col-md-8'>
            <DataHeader changeChart={this.changeChart.bind(this)}/>                    
            {this.renderCharts()}

            <br />
            <br /> 

            <Comments iden={this.props.data.request[0].query} username={this.props.username}/>
            </div>
            <div className='col-md-4'>

              <Widget data={data}/>
              <Addfavs nameString={title} iden={this.props.data.request[0].query} username={this.props.username}/>
            </div>
          </div>   
                    
        </div>
      )
    }
  }
}