import React, { Component } from 'react';
import List from '../List';
import PropTypes from 'prop-types';

import 'preact-material-components/Card/style.css';

const paperStyle = {
  height: 400,
  width: '100%',
  margin: 0,
  marginBottom: 10,
  textAlign: 'center',
};

export default class WhiteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  render() {
    console.log('at WhiteBoard, props:');
    console.log(this.props);
    return (
      <div className="mdc-card">
        Simple Card
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const text = this.state.text;
    this.props.handleSubmit(text, this.props.cardType);
    this.setState({ text: '' });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
}

WhiteBoard.propTypes = {
  cardType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // votes: PropTypes.number.isRequired,
    // voted: PropTypes.bool.isRequired,
    // vote: PropTypes.func.isRequired,
  })).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onVoteItem: PropTypes.func.isRequired,
};
