import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Sidebar() {
    const userAvatar = sessionStorage.getItem('userAvatar');
    const username = sessionStorage.getItem('username');
    const userId = sessionStorage.getItem('userId');
    return (
        <div className="sidebar">
            <div className="sidebar__body">

                <Link to={`/users/${userId}/profile`} className="sidebar__row">
                    <img src={userAvatar} className="sidebar__icon"/>
                    <p className="sidebar__text">{username}</p>
                </Link>
               

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
                    <a href="http://www.twitch.tv" className="sidebar__link">
                        <img />
                        <p>Twitch</p>
                    </a>
                </div>

                <div>
                    <a href='https://runescape.wiki/' className="sidebar__link">
                        <img />
                        <p>RuneWiki</p>
                    </a>
                </div>
                <div>
                    <a href='https://www.youtube.com/GAMING' className="sidebar__link">
                        <img />
                        <p>Youtube Gaming</p>
                    </a>
                </div>
                <div>
                    <a href='https://runescape.wiki/' className="sidebar__link">
                        <img />
                        <p>RuneWiki</p>
                    </a>
                </div>
            </div>

            
        </div>
    )
}

export default Sidebar