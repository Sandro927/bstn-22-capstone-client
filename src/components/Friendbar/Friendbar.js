import React from 'react';
import './Friendbar.scss';
import { Link } from 'react-router-dom';
import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';
import avatar5 from '../../assets/avatars/avatar5.png';
import avatar6 from '../../assets/avatars/avatar6.png';
import avatar7 from '../../assets/avatars/avatar7.png';


function Friendbar() {
  const dummyAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7];
  return (
    <div className="friendbar">
      <h2 className="friendbar__title">Friends</h2>

      <div className="friendbar__row">
        <Link className="friendbar__link">
          <img src={dummyAvatars[3]} className="friendbar__icon"/>
          <p className="friendbar__text">John Smith</p>
        </Link>
      </div>

      <div className="friendbar__row">
         <img src={dummyAvatars[4]} className="friendbar__icon"/>
          <p className="friendbar__text">Jane Doe</p>
      </div>

      <div className="friendbar__row">
          <img src={dummyAvatars[5]} className="friendbar__icon"/>
          <p className="friendbar__text">Mike</p>
      </div>

      <div className="friendbar__row">
          <img src={dummyAvatars[6]} className="friendbar__icon"/>
          <p className="friendbar__text">Frank</p>
      </div>  
    </div>
  )
}

export default Friendbar