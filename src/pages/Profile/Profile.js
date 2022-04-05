import React from 'react';
import './Profile.scss';
import ProfileCard from '../../components/Profile/ProfileCard/ProfileCard';
import FriendsCard from '../../components/Profile/FriendsCard/FriendsCard';

function Profile() {
  return (
    <div className="profile">
      <div className="profile__content">
        <h1 className="profile__title">Profile</h1>
        <ProfileCard />
        <FriendsCard />
      </div>
    </div>
  )
}

export default Profile