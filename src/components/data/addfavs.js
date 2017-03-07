import React, { Component } from 'react';
import axios from 'axios';
import config from './../config'

export default class Widget extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      isFavorite: false
    }
  }

  postToFavorites() {
    var nameString = this.props.nameString.split(',').slice(0,2).join(', ')
    axios.post(`${config.server}/favorites`, {
      identity: this.props.iden,
      username: this.props.username,
      nameString: nameString
    }, {
      headers:{authorization: localStorage.getItem('token')}
    }).then(res=>this.isFavorite())
  }

  removeFromFavorites() {
    var nameString = this.props.nameString.split(',').slice(0,2).join(', ');
    axios.delete(`${config.server}/favorites/${this.props.username}/${nameString}`,{
      headers:{authorization: localStorage.getItem('token')}
    }).then(result => {
      this.isFavorite()
    })
  }

  isFavorite() {
    var nameString = this.props.nameString.split(',').slice(0,2).join(', ')
    axios.get(`${config.server}/favorites/${this.props.username}/${nameString}`,{
      headers:{authorization: localStorage.getItem('token')}
    }).then(found => {
      this.setState({isFavorite: found.data.value})
    })
  }

  renderButton() {
    if(!this.state.isFavorite) {
      return <h3 className="panel-title" onClick={this.postToFavorites.bind(this)}>Add to Favorites</h3>
    } else {
      return <h3 className="panel-title" onClick={this.removeFromFavorites.bind(this)}>Remove from Favorites</h3>
    }
  }

  componentWillMount() {
    this.isFavorite()
  }

  render() {
    return (
      <div className="panel panel-primary click">
        <div className="panel-heading">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}