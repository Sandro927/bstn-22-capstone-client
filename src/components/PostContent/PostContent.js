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
        this.fetchPosts();
    }

    fetchPosts = () => {
        axios.get('http://localhost:3030/posts')
        .then(res => {
            this.setState({ posts: res.data})
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    refreshPosts= () =>  {
        this.fetchPosts();
    }

  render() {
    return (
        <div className="post-content">
            <NewPost userId={this.props.userId} userAvatar={this.props.userAvatar} refreshPosts={this.refreshPosts}/>
            { 
                this.state.posts ? 
                    this.state.posts.map(post =>{
                        console.log(post);
                    return <Post postContent={post} key={post.postId}/>}) : 'Loading....'
            }
            
        </div>
    )
  }
}

export default PostContent