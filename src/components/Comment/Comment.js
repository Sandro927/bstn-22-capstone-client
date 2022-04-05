import React, { Component } from 'react';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { format, render, cancel, register } from 'timeago.js';
import axios from 'axios';
import './Comment.scss';
import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';
import avatar5 from '../../assets/avatars/avatar5.png';
import avatar6 from '../../assets/avatars/avatar6.png';
import avatar7 from '../../assets/avatars/avatar7.png';

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
    const dummyAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7]
    return (
       
      <div className="comment">
           {
            !this.state.commentContent ? "Loading..." 
            :
                <>
                    <img src={dummyAvatars[this.state.userId]} className="comment__avatar"/>
                    <div className="comment__content">
                        <div className="comment__body">
                            <p className="comment__user">{this.state.username}</p>
                            <p className="comment__text">{this.state.commentContent}</p> 
                        </div>

                        <div className="comment__footer">
                            <div className="comment__likes">
                                <ThumbUpIcon className="comment__icon" onClick={this.handleLikeClick}/>
                                <p className="comment__likes-text">{this.state.likeCount} Likes</p>
                            </div>
                            <p className="comment__timestamp">{this.state.commentedAt}</p>
                        </div>
                    </div>
                </>
            }
        </div>
        
    )
  }
}

export default Comment