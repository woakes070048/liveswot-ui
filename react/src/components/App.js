import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Swot from './Swot';
import Footer from './Footer';
import Item from '../objects/Item';
import Counter from '../objects/Counter';

class App extends Component {
  render() {
    console.log('at App, props:');
    console.log(this.props);
    return (
      <div>
        <Header/>
        <Swot
          strengths={this.props.strengths}
          weaknesses={this.props.weaknesses}
          opportunities={this.props.opportunities}
          threats={this.props.threats}

          onAddItem={this.props.onAddItem}
          onVoteItem={this.props.onVoteItem}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
