import React from 'react';
import './Post.scss';
import PostsComments from '../CommentsList/CommentsList'
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { format, render, cancel, register } from 'timeago.js';
import axios from 'axios';

class Post extends React.Component {

  

  state = {
    username: null,
    userId: null,
    postContent: null,
    postImage: null,
    postedAt: null,
    postId: null,
    likeCount: null,
    commentsActive: false
  }

  componentDidMount() {

    
    const { username, userId, postContent, postImage, postedAt, postId, likeCount  } = this.props.postContent;
  
    this.setState({
      username: username,
      userId: userId,
      postedAt: format(postedAt, 'en_US'),
      postContent: postContent,
      postImage: postImage,
      postId: postId,
      likeCount: likeCount
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

  handleCommentClick = () => {
    this.setState({
      commentsActive: !this.state.commentsActive
    })
  }

  render() {
    return (
      <div className="post">
          <div className="post__content">
              <FaceIcon className="post__avatar"/>
              <div className="post__body">
                  <p className="post__user">{this.state.username}</p>
                  <div className="post__user-info">
                    <p className="post__date">{this.state.postedAt}</p>
                    <p className="post__likes">{this.state.likeCount} Likes</p>
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

            <div 
              className={this.state.commentsActive ? "post__footer-content post__footer-content--active" :  "post__footer-content"} 
              onClick={this.handleCommentClick}
            >
              <AddCommentIcon className="post__footer-icon"/>
              <p className="post__footer-text"> Comment</p>
            </div>
          </div>
          {
            this.state.commentsActive &&  <PostsComments />
          }
         
      </div>
    ) 
  }
  
}

export default Post