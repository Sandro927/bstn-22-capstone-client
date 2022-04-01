import React from 'react';
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon
import SendIcon from '@mui/icons-material/Send';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './NewPost.scss';
import axios from 'axios';

class NewPost extends React.Component {

  state = {
    postContent: "",
    postImage: "",
    userId: this.props.userId
  }

  user = sessionStorage.getItem('username');

  onPostSubmit = (e) => {
    e.preventDefault();
      axios.post('http://localhost:3030/posts', {
        postContent: this.state.postContent,
        postImage: this.state.postImage,
        userId: this.state.userId
     })
     .then((res) => {
        this.setState({
          postContent: "",
          postImage: "",
        })
        this.props.refreshPosts();
     })
     .catch((err) => {
       console.log(err);
     })
   }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
  })
  }

   render() {
    return (
      <div className="new-post">
          <form className="new-post__form" onSubmit={this.onPostSubmit}>
              <FaceIcon className="new-post__avatar"/>
              <input 
                type="text" 
                name="postContent" 
                className="new-post__input" 
                placeholder={`What's on your mind, ${this.user}?`}
                value={this.state.postContent}
                onChange={this.handleChange}
              />
              <button type="submit" className="new-post__button">
                <SendIcon />
              </button>
              <div className="new-post__photo-input">
                <label htmlFor="new-post__photo-label">
                  <AddAPhotoIcon />
                </label>

                <input 
                className="new-post__file" 
                id="new-post__photo-label" 
                type="file" 
                name="postImage"
                value={this.state.postImage}
                onChange={this.handleChange}
              />
              </div>
          </form>
      </div>
    ) 
   }
  
}

export default NewPost