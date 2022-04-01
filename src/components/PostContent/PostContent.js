import React, { Component } from 'react';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post'
import './PostContent.scss';
import axios from 'axios';

export class PostContent extends Component {

    state = {
        posts: null
    }

    componentDidMount() {
        axios.get('http://localhost:3030/posts')
            .then(res => {
                this.setState({ posts: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

  render() {
    return (
        <div className="post-content">
            <h1 className="post-content__title">Feed</h1>
            <NewPost userId={this.props.userId}/>
            { 
                this.state.posts ? 
                    this.state.posts.map(post =><Post postContent={post} key={post.id}/>) : 'Loading....'
            }
            
        </div>
    )
  }
}

export default PostContent