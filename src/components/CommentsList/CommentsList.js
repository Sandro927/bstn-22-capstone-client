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
    axios.get(`http://localhost:3030/posts/${this.props.postId}/comments`)
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
      .catch(err => {

      })
  }


  render() {
    return (
      <div className="comments">
        <AddComment postId={this.props.postId}/>
        { 
          this.state.comments && 
          this.state.comments.map((comment) => <Comment key={comment.commentId} commentData={comment}/>)
        }
      </div>
    )
  }
}

export default CommentsList