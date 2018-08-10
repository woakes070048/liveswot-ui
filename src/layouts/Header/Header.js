import React from 'react';

import { localizedText } from '../../utils/index';
import styles from './styles.scss';


const Header = ({logout, username, email, profileImg, isLoggedIn}) => {
  return (
    <div className={`navbar-fixed ${styles["nav-fixed"]}`}>
      <nav className={`${styles.nav}`}>
        <div className={`nav-wrapper ${styles["nav-wrapper"]}`}>
          <div className={`row ${styles["row-no-margin"]}`}>
            <div className={`col l1`}></div>
            <div className={`col l10 ${styles["nav-main"]}`}>
              <a href='/' className='brand-logo'>{localizedText().title}</a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                {!isLoggedIn && <li><a href='/login'>Login</a></li>}
                {isLoggedIn && <li><a href='' onClick={() => logout()}>Logout</a></li>}
                {isLoggedIn &&
                <li className={`${styles["nav-bar-list"]}`}>
                  <a href='/profile'>
                    <div className={`right ${styles["profile-img-wrapper"]}`}>
                      <img
                        alt={username}
                        className={`circle responsive-img ${styles["profile-img"]}`}
                        src={profileImg}
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