import React, { Component } from 'react';
import List from '../List';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
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

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  render() {
    console.log('at WhiteBoard, props:');
    console.log(this.props);
    return (
      <div>
        <div md={12} sm={12}>
          <h3>{this.getTitle()}</h3>
        </div>
        <div md={12} sm={12}>
          <Paper style={paperStyle}>
            <div>
              <div md={12}>
                <TextField
                  hintText={'Write down a ' + this.props.boardType}
                  fullWidth={true}
                  multiLine={true}
                  rows={1}
                  rowsMax={3}
                  value={this.state.text}
                  onKeyPress={this.onKeyPress}
                  onChange={this.onTextChange}
                />
              </div>
              <div md={12}>
                <List {...this.props} />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }

  onKeyPress(event) {
    event.preventDefault();
    if (event.charCode === 13) {
      if (!event.shiftKey) {
        // press enter => submit
        if (event.target.value !== '') {
          // input text not empty
          this.props.onAddItem('username', event.target.value, this.props.boardType);
          this.setState({text: ''});
        }
      }
      // press shift + enter => create new line
    }
  }

  onTextChange(event) {
    this.setState({text: event.target.value});
  }

  getTitle() {
    return this.props.boardType.charAt(0).toUpperCase() +
      this.props.boardType.slice(1, this.props.boardType.length);
  }
}

WhiteBoard.propTypes = {
  boardType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    // username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // votes: PropTypes.number.isRequired,
    // voted: PropTypes.bool.isRequired,
    // vote: PropTypes.func.isRequired,
  })).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onVoteItem: PropTypes.func.isRequired,
};
