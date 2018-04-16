import React from 'react';

import { midCellStyle, gridStyle } from "./styles";


const Body = (Component) => (props) => {
  return (
    <div className='row' style={gridStyle()}>
      <div className='col m1'></div>
      <div className='col m10' style={midCellStyle()}>
        <Component {...props} />
      </div>
      <div className='col m1'></div>
    </div>
  );
};

export default Body;
