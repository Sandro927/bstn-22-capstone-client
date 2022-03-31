import React from 'react';
import './Sidebar.scss';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PeopleIcon from '@mui/icons-material/People';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__row">
            <InsertEmoticonIcon className="sidebar__icon"/>
            <p className="sidebar__text">User</p>
        </div>

        <div className="sidebar__row">
            <PeopleIcon className="sidebar__icon"/>
            <p className="sidebar__text">Friends</p>
        </div>

        <div className="sidebar__row">
            <GroupAddIcon className="sidebar__icon"/>
            <p className="sidebar__text">Groups</p>
        </div>

        <div className="sidebar__row">
            <DarkModeIcon className="sidebar__icon"/>
            <p className="sidebar__text">Events</p>
        </div>  
    </div>
  )
}

export default Sidebar