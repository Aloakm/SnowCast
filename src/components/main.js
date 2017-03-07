import React, { Component } from 'react';
import Carousel from './landing/carousel'
import Favorites from './main/favorites'

export default class Main extends Component {
	render() {
		return (
			<div className="row">
        <div className='col-md-8'>
          <Carousel />
        </div>
        <div className='col-md-4'>
          <Favorites username={this.props.username} fetch={this.props.fetch}/>
        </div>
      </div>
		)
	}
}