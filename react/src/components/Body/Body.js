import React, { Component } from 'react';
import 'preact-material-components/LayoutGrid/style.css';
import Swot from '../Swot';

class Body extends Component {
  render() {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-1"></div>
          <div className="mdc-layout-grid__cell--span-10">
            <Swot/>
          </div>
          <div className="mdc-layout-grid__cell--span-1"></div>
        </div>
      </div>
    );
  }
}

export default Body;
