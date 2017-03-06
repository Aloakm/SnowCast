import React, { Component } from 'react';
import Comment from './comment';
import axios from 'axios'
import CommentForm from './comment-form'

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {}
    }
    
    console.log
  }

  componentDidMount() {
    this.fetchComments()   
  }

  fetchComments() {
    axios.get(`http://localhost:3090/comments/${this.props.iden}`).then(response => {
      this.setState({comments: response.data})
    })
  }

  postComment(comment) {
    axios.post('http://localhost:3090/comments', {
      identity: this.props.iden,
      username: this.props.username,
      comment: comment
    }).then(res=>this.fetchComments())
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