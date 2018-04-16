import React from 'react';

import { localizedText } from '../../utils';
import {
  navStyles,
  navWrapperStyles,
  profileImgWrapperStyles,
  profileImgStyles
} from './styles';


const Header = ({logout, username, email, profileImg, isLoggedIn}) => {
  return (
    <div className='navbar-fixed'>
      <nav style={navStyles}>
        <div className='nav-wrapper' style={navWrapperStyles}>
          <a href='/' className='brand-logo'>{localizedText().title}</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {!isLoggedIn && <li><a href='/login'>Login</a></li>}
            {isLoggedIn && <li><a href='#' onClick={() => logout()}>Logout</a></li>}
            {isLoggedIn &&
            <li>
              <a href='/profile'>
                <div className='right' style={profileImgWrapperStyles}>
                  <img
                    className='circle responsive-img'
                    src={profileImg}
                    style={profileImgStyles}
                  />
                </div>
            </a></li>}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;