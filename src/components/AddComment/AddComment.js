import React, { Component } from 'react';
import './AddComment.scss';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import SendIcon from '@mui/icons-material/Send';

export class AddComment extends Component {
  render() {
    return (
        <div className="new-comment">
            <FaceIcon className="new-comment__icon" />
            <form className="new-comment__form">
                <input type="text" placeholder="Write a comment..." className="new-comment__input" />
                <SendIcon className="new-comment__send" />
            </form>
            
        </div>
    )
  }
}

export default AddComment