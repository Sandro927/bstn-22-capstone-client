import React, { Component } from 'react';
import './AddComment.scss';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';
import avatar5 from '../../assets/avatars/avatar5.png';
import avatar6 from '../../assets/avatars/avatar6.png';
import avatar7 from '../../assets/avatars/avatar7.png';


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

    const dummyAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7];

    return (
        <div className="new-comment">
            <img src={dummyAvatars[0]} className="new-comment__avatar"/>
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