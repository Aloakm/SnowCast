import React, { Component } from 'react';
import Comment from './comment';
import axios from 'axios'
import CommentForm from './comment-form'
import config from './../config'

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {}
    }
    
  }

  componentDidMount() {
    this.fetchComments()   
  }

  fetchComments() {
    axios.get(`${config.server}/comments/${this.props.iden}`,{
      headers:{authorization: localStorage.getItem('token')}
    }).then(response => {
      this.setState({comments: response.data})
    }).catch(e => {
      console.log(e)
    })
  }

  postComment(comment) {
    axios.post(`${config.server}/comments`, {
      identity: this.props.iden,
      username: this.props.username,
      comment: comment
    }, {
      headers:{authorization: localStorage.getItem('token')}
    }).then(res=>this.fetchComments()).catch(e => {
      console.log(e)
    })
  }


  renderComments() {
    if (this.state.comments[0]) {
      return this.state.comments.map(comment => <Comment key={comment._id} comment={comment}/>)
    } else {
      return;
    }
  }

  render() {
    return (
    <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Firsthand Reports</h3>
        </div>
        <div className="panel-body">
        {this.renderComments()}

        </div>
         <CommentForm postComment={this.postComment.bind(this)}/>
      </div>
    )
  }
}