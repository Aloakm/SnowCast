import React, { Component } from 'react';
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';

export default class Carousel extends Component {
  render() {
    return(
      <div style={{height:350,margin:0}}>
        <React_Boostrap_Carousel animation={true} className="carousel-fade">
          <div style={{height:350,width:"100%",backgroundColor:"black",paddingTop:'100px'}}>
            <div style={{top:'100px'}}>123</div>
          </div>
          <div style={{height:350,width:"100%",backgroundColor:"blue"}}>
            456
          </div>
          <div style={{height:350,width:"100%",backgroundColor:"green"}}>
            789
          </div>
        </React_Boostrap_Carousel>
      </div>
    )
  
  }
}