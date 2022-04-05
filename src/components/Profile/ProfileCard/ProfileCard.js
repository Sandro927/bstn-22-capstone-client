import React from 'react';
import './ProfileCard.scss';
import avatar3 from '../../../assets/avatars/avatar3.png';


function ProfileCard() {
  return (
    <div className="profilecard">
        <img src={avatar3} className="profilecard__avatar"/> 
        <p className="profilecard__user">Username</p>
        
        <div className="profilecard__ctas">
            <button className="profilecard__button">ADD FRIEND</button>
            <button className="profilecard__button profilecard__button--secondary">MESSAGE</button>
        </div>
        
        <p className="profilecard__bio">My Bio Goes here......ggggggggggggggggggggggggggggggggggggggggggggggggg</p>    
       
        
    </div>
  )
}

export default ProfileCard