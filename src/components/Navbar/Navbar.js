import React from 'react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import HomeIcon from '@mui/icons-material/Home'; //Home icon
import SpeedIcon from '@mui/icons-material/Speed'; //Dashboard icons
import ForumIcon from '@mui/icons-material/Forum'; //Messasging Icon
import GroupAddIcon from '@mui/icons-material/GroupAdd'; //Group finder icon
import FaceIcon from '@mui/icons-material/Face'; //Avatar Icon


import  { NavLink } from 'react-router-dom';
import './Navbar.scss'

class Navbar extends React.Component {

  state = {
    userAvatar: null,
    userId: null
  }

  componentDidUpdate(prevProps) {
    console.log('updated');
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      this.setState({
        userAvatar: sessionStorage.getItem('userAvatar'),
        userId: sessionStorage.getItem('userId')
      })
    }
  }

  render () {
    return (
      <div className='navbar'>
        <div className='navbar__content'>
          <div className='navbar__left'>
            <NavLink to='/' className='navbar__logo navbar__link--active'> 
              <VideogameAssetIcon className="navbar__icon"/>
              <p>GG</p>
            </NavLink>
          </div>
  
          <div className='navbar__center'>
            <NavLink activeClassName='navbar__link--active' to='/' className='navbar__link'> 
              <HomeIcon className="navbar__icon"/>
            </NavLink>
  
            <NavLink activeClassName='navbar__link--active' to='/nowhere' className='navbar__link'> 
              <SpeedIcon className="navbar__icon"/>
            </NavLink>
  
            <NavLink activeClassName='navbar__link--active' to='/nowhere' className='navbar__link'> 
              <ForumIcon className="navbar__icon"/>
            </NavLink>
  
            <NavLink activeClassName='navbar__link--active' to='/nowhere' className='navbar__link'> 
              <GroupAddIcon className="navbar__icon"/>
            </NavLink>
          </div>
  
          <div className='navbar__right'>
            <NavLink to={`/users/${this.state.userId}/profile`} className='navbar__link'> 
            {
              this.state.userAvatar ? 
                <img src={this.state.userAvatar} className="navbar__icon navbar__icon-avatar" alt="Avatar"/> 
              : 
                <FaceIcon className="navbar__icon"/>
              } 
            </NavLink>
            
          </div>
        </div>        
      </div>
    ) 
  }
  

}

export default Navbar