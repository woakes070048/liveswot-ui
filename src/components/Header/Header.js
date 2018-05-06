import React from 'react';

import { localizedText } from '../../utils';
import styles from './styles';


const Header = ({logout, username, email, profileImg, isLoggedIn}) => {
  return (
    <div className='navbar-fixed' style={styles.navFixed}>
      <nav style={styles.nav}>
        <div className='nav-wrapper' style={styles.navWrapper}>
          <div className={`row`} style={{
            margin: '0',
          }}>
            <div className={`col l1`}></div>
            <div className={`col l10`} style={styles.navMain}>
              <a href='/' className='brand-logo'>{localizedText().title}</a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                {!isLoggedIn && <li><a href='/login'>Login</a></li>}
                {isLoggedIn && <li><a href='#' onClick={() => logout()}>Logout</a></li>}
                {isLoggedIn &&
                <li style={styles.navBarList}>
                  <a href='/profile'>
                    <div className='right' style={styles.profileImgWrapper}>
                      <img
                        className='circle responsive-img'
                        src={profileImg}
                        style={styles.profileImg}
                      />
                    </div>
                  </a></li>}
              </ul>
            </div>
            <div className={`col l1`}></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;