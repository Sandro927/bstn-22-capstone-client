import React, { Component } from 'react';
import './Profile.scss';
import ProfileCard from '../../components/Profile/ProfileCard/ProfileCard';
import FriendsCard from '../../components/Profile/FriendsCard/FriendsCard';
import SocialAccounts from '../../components/Profile/SocialAccounts/SocialAccounts';
import RecentPosts from '../../components/Profile/RecentPosts/RecentPosts';
import ProfileSettings from '../../components/Profile/ProfileSettings/ProfileSettings';
import axios from 'axios';


class Profile extends Component {

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
            
            axios.get(`http://localhost:3030/users/${this.state.userInfo.userId}/profile`)
            .then(res => {
              if (res.data.userAvatar)
              sessionStorage.setItem('userAvatar', res.data.userAvatar)
            })
            //If the user has not filled out their profile yet, redirect to profile page.
        })
    }
  }
  
  render() {
   const { userId } = this.props.match.params;
    return (
      <div className="profile">
        <div className="profile__content">
          <ProfileCard userId={userId}/>
          <SocialAccounts userId={userId}/>
          <FriendsCard />
          <RecentPosts userId={userId}/>
          {/* <ProfileSettings /> */}
        </div>
      </div>
    ) 
  }
}

export default Profile