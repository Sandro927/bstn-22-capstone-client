import React, { Component } from 'react';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { format, render, cancel, register } from 'timeago.js';
import axios from 'axios';
import './Comment.scss';

export class Comment extends Component {

    state = {
        username: null,
        userId: null,
        commentContent: null,
        commentedAt: null,
        commentId: null,
        likeCount: null,
      }

      componentDidMount() {

        const { username, userId, commentContent, commentImage, commentedAt, commentId, likeCount  } = this.props.commentData;
        
        this.setState({
            username: username,
            userId: userId,
            commentedAt: format(commentedAt, 'en_US'),
            commentContent: commentContent,
            commentImage: commentImage,
            commentId: commentId,
            likeCount: likeCount
          })
      }

      handleLikeClick = () => {
        const currentLikeCount = this.state.likeCount;
        this.setState({
          likeCount: currentLikeCount + 1
        }, () => {
          axios.put(`http://localhost:3030/posts/${this.props.postId}/comments/${this.state.commentId}/like`, {
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
       
      <div className="comment">
           {
            !this.state.commentContent ? "Loading..." 
            :
                <>
                    <FaceIcon />
                    <div className="comment__content">
                        <div className="comment__body">
                            <p className="comment__user">{this.state.username}</p>
                            <p className="comment__text">{this.state.commentContent}</p> 
                        </div>

                        <div className="comment__footer">
                            <div className="comment__likes">
                                <ThumbUpIcon className="comment__icon" onClick={this.handleLikeClick}/>
                                <p>{this.state.likeCount} Likes</p>
                            </div>
                            <p>{this.state.commentedAt}</p>
                        </div>
                    </div>
                </>
            }
        </div>
        
    )
  }
}

export default Comment