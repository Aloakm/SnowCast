import React, { Component } from 'react';
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';

export default class Carousel extends Component {
  render() {
    return(
      <div style={{height:350,margin:0}}>
        <React_Boostrap_Carousel animation={true} className="carousel-fade">
          <div style={{height:350,width:"100%",backgroundSize: "100%",backgroundImage: "url('http://img1.onthesnow.com/image/gg/48/1_485040.jpg')",paddingTop:'300px'}}>
            <div className='box'><a style={{color: 'black', textAlign:'center'}} href="http://www.onthesnow.com/gallery/p/photo/4374/jackson-hole-mountain-resort-2-17-id485042"><h3>Photo Gallery: Favorite Pics from February</h3></a></div>
          </div>
          <div style={{height:350,width:"100%",backgroundSize: "100%",backgroundImage: "url('http://img3.onthesnow.com/image/gg/48/1_485042.jpg')",paddingTop:'310px'}}>
            <div className='box'><a style={{color: 'black', textAlign:'center'}} href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=newssearch&cd=1&cad=rja&uact=8&ved=0ahUKEwi-5Nv4rMPSAhXGi1QKHVlTA9MQqQIIGigAMAA&url=http%3A%2F%2Fmynorth.com%2F2016%2F12%2Fcrystal-mountain-liftopia-named-2-ski-resort%2F&usg=AFQjCNGybZP5NACUMAzI3B-ufvMXOF2Bsg&sig2=LBLZpLJbxfBP4jrQyfgD6g"><h4>Crystal Mountain Named #2 Ski Resort in US and Canada by Liftopia</h4></a></div>
          </div>
          <div style={{height:350,width:"100%",backgroundSize: "100%",backgroundImage: "url('http://img3.onthesnow.com/image/gg/48/1_485048.jpg')",paddingTop:'315px'}}>
            <div className='box'><a style={{color: 'black', textAlign:'center'}} href="https://www.youtube.com/watch?v=NWeWCw0HmLU"><h4>MUST WATCH: Crystal Mountain powder weekend</h4></a></div>
          </div>
        </React_Boostrap_Carousel>
      </div>
    )
  
  }
}