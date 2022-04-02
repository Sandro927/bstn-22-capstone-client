import axios from 'axios';
import React, { Component } from 'react'
import AddComment from '../AddComment/AddComment';
import Comment from '../Comment/Comment';
import './CommentsList.scss';

export class CommentsList extends Component {
  state = {
    comments: null
  }

  componentDidMount() {
    this.fetchCommentData();
  }

  fetchCommentData = () => {
    axios.get(`http://localhost:3030/posts/${this.props.postId}/comments`)
    .then(res => {
      this.setState({
        comments: res.data
      })
    })
    .catch(err => {

    })
  }

  refreshComments = () => {
    this.fetchCommentData();
  }

  render() {
    return (
      <div className="comments">
        <AddComment postId={this.props.postId} refreshComments={this.refreshComments}/>
        { 
          this.state.comments && 
          this.state.comments.map((comment) => <Comment postId={this.props.postId} key={comment.commentId} commentData={comment}/>)
        }
      </div>
    )
  }
}

export default CommentsList