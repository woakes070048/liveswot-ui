import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { NavigationDrawer } from 'react-md';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
