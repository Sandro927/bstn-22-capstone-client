import React from 'react';
import './Post.scss';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { format, render, cancel, register } from 'timeago.js';
import axios from 'axios';

class Post extends React.Component {

  state = {
    postUser: null,
    postContent: null,
    postedAt: null,
    likeCount: null,
  }

  componentDidMount() {
    this.setState({
      postUser: this.props.postContent.post_user_id,
      postContent: this.props.postContent.postContent,
      postedAt: format(this.props.postContent.postedAt, 'en_US'),
      likeCount: this.props.postContent.likeCount
    })
  }

  handleLikeClick = () => {
    const currentLikeCount = this.state.likeCount
    this.setState({
      likeCount: currentLikeCount + 1
    }, () => {
      axios.put(`http://localhost:3030/posts/${this.props.postContent.postId}/like`, {
      likeCount: this.state.likeCount
      })
      .then((res) => {
      console.log(res)
      })
      .catch(err => {
      console.log(err);
      })
    })
    
  }

  render() {
    return (
      <div className="post">
          <div className="post__content">
              <FaceIcon className="post__avatar"/>
              <div className="post__body">
                  <p className="post__user">User {this.state.postUser}</p>
                  <div className="post__user-info">
                    <p className="post__date">{this.state.postedAt}</p>
                    <p className="post__likes">{this.state.likeCount} likes</p>
                  </div>
                  
              </div>
          </div>
          <p className="post__text">{this.state.postContent}</p>

          {

          }

          <div className="post__footer">
            <div className="post__footer-content" onClick={this.handleLikeClick}>
              <ThumbUpIcon className="post__footer-icon"/>
              <p className="post__footer-text">Like</p>
            </div>

            <div className="post__footer-content">
              <AddCommentIcon className="post__footer-icon"/>
              <p className="post__footer-text"> Comment</p>
            </div>
          </div>
      </div>
    ) 
  }
  
}

export default Post