import React, { Component } from 'react';
import Tabs from './favorite-tabs';
import axios from 'axios';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {}
    }
  }

  componentDidMount() {
    this.fetchFavorites()   
  }

  fetchFavorites() {
    axios.get(`http://localhost:3090/favorites/${this.props.username}`,{
      headers:{authorization: localStorage.getItem('token')}
    }).then(response => {
      
      this.setState({favorites: response.data})
      console.log(this.state.favorites)
    })
  }

  renderTabs() {
    if (this.state.favorites[0]) {
      return this.state.favorites.map(fav => <Tabs key={fav._id} fav={fav} fetch={this.props.fetch} />)
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Favorites</h3>
        </div>
        <div className="panel-body">
          {this.renderTabs()}
        </div>
      </div>
    )    
  }
}