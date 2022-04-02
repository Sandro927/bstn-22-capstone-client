import React, { Component } from 'react'
import AddComment from '../AddComment/AddComment';
import Comment from '../Comment/Comment';
import './CommentsList.scss';

export class CommentsList extends Component {
  render() {
    return (
      <div className="comments">
        <AddComment postId={this.props.postId}/>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    )
  }
}

export default CommentsList