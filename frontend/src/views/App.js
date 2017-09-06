import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import Swot from './components/Swot/index.js';
import Footer from './components/Footer/index.js';

let _counter = 1;

const Counter = {
  increment() {
    return 'id-' + String(_counter++);
  },
};

class Item {
  constructor(id, username, text, boardType) {
    this.id = id;
    this.username = username;
    this.text = text;
    this.boardType = boardType;
    this.votes = 0;
    this.voted = false;
    this.vote = this.vote.bind(this);
  }

  vote() {
    this.voted = !this.voted;
    if (this.voted) this.votes++; else this.votes--;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: [],
      items: [],
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onVoteItem = this.onVoteItem.bind(this);
  }

  componentDidMount() {
    // this.props.onMountApp();
  }

  render() {
  	console.log('App.render()');
  	
    return (
      <div>
        <Header/>
        <Swot
        	strengths={this.state.items.filter(filterByBoardType('strength'))}
          weaknesses={this.state.items.filter(filterByBoardType('weakness'))}
          opportunities={this.state.items.filter(filterByBoardType('opportunity'))}
          threats={this.state.items.filter(filterByBoardType('threat'))}

          onAddItem={this.onAddItem}
          onVoteItem={this.onVoteItem}
        />
        <Footer/>
      </div>
    );
  }

  /* helper methods definitions */
  onAddItem(username, text, boardType) {
    this.setState({
      items: [].concat(this.state.items).concat([
        new Item(Counter.increment(), username, text, boardType)
        ]),
    });
  }

  onVoteItem(id) {
    let items = [].concat(this.state.items);
    const item = items.find((e) => e.id === id);
    item.vote();
    this.setState({
      items: items,
    });
  }
}

export default App;

/* helper callback function definitions */

const filterByBoardType = (boardType) => {
  switch(boardType) {
    case 'strength':
      return ((item) => {
        return item.boardType === 'strength';
      });
    case 'weakness':
      return ((item) => {
        return item.boardType === 'weakness';
      });
    case 'opportunity':
      return ((item) => {
        return item.boardType === 'opportunity';
      });
    case 'threat':
      return ((item) => {
        return item.boardType === 'threat';
      });
    default:
      return null;
  }
}