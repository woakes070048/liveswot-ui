import React, { Component } from 'react';

import './App.scss';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

class App extends Component {
  componentDidMount() {
    this.props.onMountFetchItems();
  }

  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
};

export default App;
