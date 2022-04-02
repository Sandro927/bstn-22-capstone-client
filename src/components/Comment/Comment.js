import React, { Component } from 'react';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Comment.scss';

export class Comment extends Component {
  render() {
    return (
      <div className="comment">
            <FaceIcon />
            <div className="comment__content">
                <div className="comment__body">
                    <p className="comment__user">User</p>
                    <p className="comment__text">Comment goes here....</p> 
                </div>

                <div className="comment__footer">
                    <div className="comment__likes">
                        <ThumbUpIcon className="comment__icon"/>
                        <p>0 Likes</p>
                    </div>
                    <p>2 hours ago</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Comment