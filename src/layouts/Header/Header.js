import React from 'react';
import {Link} from 'react-router-dom';
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
              <Link to='/' className='brand-logo'>{localizedText().title}</Link>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                {!isLoggedIn && <li><Link to='/login'>Login</Link></li>}
                {isLoggedIn && <li><Link to='' onClick={() => logout()}>Logout</Link></li>}
                {isLoggedIn &&
                <li className={`${styles["nav-bar-list"]}`}>
                  <Link to='/profile'>
                    <div className={`right ${styles["profile-img-wrapper"]}`}>
                      <img
                        alt={username}
                        className={`circle responsive-img ${styles["profile-img"]}`}
                        src={profileImg}
                      />
                    </div>
                  </Link></li>}
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