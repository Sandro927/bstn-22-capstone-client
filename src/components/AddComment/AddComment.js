import React, { Component } from 'react';
import './AddComment.scss';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

export class AddComment extends Component {

    state = {
        commentContent: "",
    }

    handleCommentSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3030/posts/${this.props.postId}/comments`,{
            commentContent: this.state.commentContent,
            userId: sessionStorage.getItem('userId'),
            postId: this.props.postId
        })
        .then((res) => {
            this.props.refreshComments();
            this.setState({
                commentContent: ""
            })
        })
        .catch((err) => {

        })
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

  render() {
    return (
        <div className="new-comment">
            <FaceIcon className="new-comment__icon" />
            <form className="new-comment__form" onSubmit={this.handleCommentSubmit}>
                <input 
                    name="commentContent"
                    type="text" 
                    placeholder="Write a comment..." 
                    className="new-comment__input" 
                    value={this.state.commentContent}
                    onChange={this.handleChange}
                />
                <button className="new-comment__button">
                    <SendIcon className="new-comment__send" />
                </button>
            </form>
            
        </div>
    )
  }
}

export default AddComment