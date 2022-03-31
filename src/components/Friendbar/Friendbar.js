import React from 'react';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import './Friendbar.scss'

function Friendbar() {
  return (
    <div className="friendbar">
      <h2 className="friendbar__title">Friends</h2>

      <div className="friendbar__row">
          <PersonPinIcon className="friendbar__icon"/>
          <p className="friendbar__text">John Smith</p>
      </div>

      <div className="friendbar__row">
          <PersonPinIcon className="friendbar__icon"/>
          <p className="friendbar__text">Jane Doe</p>
      </div>

      <div className="friendbar__row">
          <PersonPinIcon className="friendbar__icon"/>
          <p className="friendbar__text">Mike</p>
      </div>

      <div className="friendbar__row">
          <PersonPinIcon className="friendbar__icon"/>
          <p className="friendbar__text">Mike</p>
      </div>  
    </div>
  )
}

export default Friendbar