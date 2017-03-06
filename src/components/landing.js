import React, { Component } from 'react';
import Snowfall from './landing/snowfall'
import Carousel from './landing/carousel'
export default class Landing extends Component {
	render() {
		return (
			<div className="row">
        <div className='col-md-8'>
          <Carousel />
        </div>
        <div className='col-md-4'>
          <Snowfall />
        </div>
      </div>
      
		)
	}
}