import React, { Component } from 'react';
import List from '../List';
import PropTypes from 'prop-types';

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
      <div>
        <div md={12} sm={12}>
          <h3>{ this.props.title }</h3>
        </div>
        <div md={12} sm={12}>
          <div style={paperStyle}> {/* Paper */}
            <div>
              <div md={12}>
                <form method="POST" onSubmit={ this.onSubmit }>
                  <div>  {/* TextField */}
                    hintText={'Write down a ' + this.props.boardType}
                    fullWidth={true}
                    rows={1}
                    rowsMax={3}
                    onChange={ this.handleTextChange }
                    value={ this.state.text }
                  </div>
                </form>
              </div>
              <div md={12}>
                <List { ...this.props } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const text = this.state.text;
    this.props.handleSubmit(text, this.props.boardType);
    this.setState({ text: '' });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
}

WhiteBoard.propTypes = {
  boardType: PropTypes.string.isRequired,
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
