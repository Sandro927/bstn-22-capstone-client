import React, { Component } from 'react';
import NewPost from '../../components/NewPost/NewPost'
import axios from 'axios';
import './Feed.scss';

export class Feed extends Component {

  state = {
    userInfo: {},
    isLoading: true,
}

  componentDidMount() {
    let token = sessionStorage.getItem('authToken');  
    if (!token) {
        this.props.history.push('/login');
    } else {
        axios.get('http://localhost:3030/users/current', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                userInfo: res.data,
                isLoading: false
            })
            sessionStorage.setItem('username', this.state.userInfo.username);
        })
    }
  }

  render() {
    return (
      <section className="feed">
        <h1 className="feed__title">Feed</h1>
        <NewPost />
      </section>
    )
  }
}

export default Feed