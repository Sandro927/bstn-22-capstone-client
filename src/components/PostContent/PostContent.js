import React, { Component } from 'react';
import NewPost from '../NewPost/NewPost';
import './PostContent.scss'

export class PostContent extends Component {
  render() {
    return (
        <div className="post-content">
            <h1 className="post-content__title">Feed</h1>
            <NewPost userId={this.props.userId}/>
        </div>
    )
  }
}

export default PostContent