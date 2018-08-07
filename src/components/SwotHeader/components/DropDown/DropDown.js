import styles from './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

const DropDown = ({active, showAddMember}) => {
  const items = [{
    text: 'one',
    icon: 'edit'
  }, {
    text: 'two',
    icon: 'close',
  }, {
    text: 'Add people',
    icon: 'add',
    iconColor: 'blue',
    callBack: () => showAddMember(),
  }, {
    text: 'four',
    icon: 'adjust',
    iconColor: 'red',
  }];

  return (
    <ul className={`${styles["drop-down"]} ${active ? styles.visible: ''}`}>
      {items.map((item, i) => (
        <li
          key={`item-${i}`}
          className={`dropdown-item`}
          onClick={(e) => {
            e.preventDefault();
            item.callBack && item.callBack();
          }}
        >
          <a href="">
            <div className={styles.li}>
              <span className={styles["li-span"]}>
                {item.text}
                <i
                  className={`material-icons right ${styles[`drop-down-item-icon-${i}`]}`}
                >
                  {item.icon}
                </i>
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

DropDown.propTypes = {
  active: PropTypes.bool.isRequired,
  showAddMember: PropTypes.func.isRequired,
};

export default DropDown;