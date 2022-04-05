import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';
import avatar5 from '../../assets/avatars/avatar5.png';
import avatar6 from '../../assets/avatars/avatar6.png';
import avatar7 from '../../assets/avatars/avatar7.png';


function Sidebar() {
    const dummyAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7];
    return (
        <div className="sidebar">
            <div className="sidebar__body">
                <div className="sidebar__row">
                    <img src={dummyAvatars[0]} className="sidebar__icon"/>
                    <p className="sidebar__text">{sessionStorage.getItem('username')}</p>
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
            <div className="sidebar__footer">
                <h2 className="sidebar__title">Shortcuts</h2>  

                <div>
                    <Link>
                        <img />
                        <p>Twitch</p>
                    </Link>
                </div>

                <div>
                    <Link>
                        <img />
                        <p>RuneWiki</p>
                    </Link>
                </div>
            </div>

            
        </div>
    )
}

export default Sidebar