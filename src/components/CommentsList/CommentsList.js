import axios from 'axios';
import React, { Component } from 'react'
import AddComment from '../AddComment/AddComment';
import Comment from '../Comment/Comment';
import './CommentsList.scss';

export class CommentsList extends Component {

  componentDidMount() {
    axios.get(`http://localhost:3030/posts/${this.props.postId}/comments`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {

      })
  }


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