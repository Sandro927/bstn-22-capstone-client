import React, { Component } from 'react';
import PostContent from '../../components/PostContent/PostContent';
import Sidebar from '../../components/Sidebar/Sidebar';
import Friendbar from '../../components/Friendbar/Friendbar';
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
            this.setState({
                userInfo: res.data,
                isLoading: false
            })
            sessionStorage.setItem('username', this.state.userInfo.username);
            sessionStorage.setItem('userId', this.state.userInfo.userId);
            sessionStorage.setItem('userAvatar', (this.state.userInfo.userAvatar));
            this.props.setLoginState(true);
        })
    }
  }

  render() {
    return (
      <section className="feed">
        {
        this.state.isLoading ? "Loading...." 
        : 
        <main className="feed__main">
          <Sidebar />
          <PostContent userId={this.state.userInfo.userId} />
          <Friendbar />
        </main>
        }
      </section>
    )
  }
}

export default Feed