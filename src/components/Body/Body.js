import React from 'react';

import styles from "./styles";


const Body = (Component) => (props) => {
  return (
    <div className='row' style={styles.grid()}>
      <div className='col m1'></div>
      <div className='col m10' style={styles.midCell()}>
        <Component {...props} />
      </div>
      <div className='col m1'></div>
    </div>
  );
};

export default Body;
