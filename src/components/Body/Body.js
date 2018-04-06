import React from 'react';
import 'preact-material-components/LayoutGrid/style.css';
import { Grid, Cell } from 'react-md';

import { midCellStyle, gridStyle } from "./styles";


const Body = (Component) => (props) => {
  return (
    <div>
      <Grid style={gridStyle()}>
        <Cell size={1}></Cell>
        <Cell size={10} style={midCellStyle()}>
          <Component {...props} />
        </Cell>
        <Cell size={1}></Cell>
      </Grid>
    </div>

  );
}

export default Body;
