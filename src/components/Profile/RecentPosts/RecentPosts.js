import React, { Component } from 'react';
import './RecentPosts.scss';
import axios from 'axios';
import Post from '../../Post/Post';

export class RecentPosts extends Component {

    state = {
        recentPosts: null
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        axios.get(`http://localhost:3030/posts/${this.props.userId}/`)
        .then(res => {
            this.setState({ recentPosts: res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

  render() {
    return (
      <div className="userposts">
        <h2 className="userposts__title">Recent Posts</h2>
        { 
            this.state.recentPosts ? 
                this.state.recentPosts.map(post =>{
                return <Post postContent={post} key={post.postId}/>}) : 'Loading....'
        }
      </div>
    )
  }
}

export default RecentPosts