import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import Swot from './components/Swot/index.js';
import Footer from './components/Footer/index.js';

class App extends Component {
  render() {
  	console.log('App.render()');
  	
    return (
      <div>
        <Header/>
        <Swot
        	strengths={this.props.items.filter((item) => { return item.boardType === 'strength'; })}
        	weaknesses={this.props.items.filter((item) => { return item.boardType === 'weakness'; })}
        	opportunities={this.props.items.filter((item) => { return item.boardType === 'opportunity'; })}
        	threats={this.props.items.filter((item) => { return item.boardType === 'threat'; })}
					onAddItem={this.props.onAddItem}
					onVoteItem={this.props.onVoteItem}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
