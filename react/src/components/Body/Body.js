import React, { Component } from 'react';
import 'preact-material-components/LayoutGrid/style.css';
import { Grid, Cell } from 'react-md';

import Swot from '../Swot';

class Body extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell size={1}></Cell>
          <Cell size={10}>
            <Swot />
          </Cell>
          <Cell size={1}></Cell>
        </Grid>
      </div>

    );
  }
}

export default Body;
