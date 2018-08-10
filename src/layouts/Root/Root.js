import React from 'react';
import styles from './styles.scss';

const Root = (props) => {
  const {children} = props;
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
};

export default Root;