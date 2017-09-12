import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Swot from './components/Swot/Swot';
import Footer from './components/Footer/Footer';
import Item from '../objects/Item';
import Counter from '../objects/Counter';
import axios from 'axios';


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
    // axios.get('/api/items.json').then((res) => {
    //   console.log(res);
    //   this.setState({items: res.data});
    // });
  }

  render() {
    console.log(this.state.items);
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