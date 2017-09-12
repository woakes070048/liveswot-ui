import React, { Component } from 'react';
import List from '../List/List';
import {Row, Col} from 'react-bootstrap';
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

class WhiteBoard extends Component {
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
    return (
      <Row>
        <Col md={12} sm={12}>
          <h3>{this.getTitle()}</h3>
        </Col>
        <Col md={12} sm={12}>
          <Paper style={paperStyle}>
            <Row>
              <Col md={12}>
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
              </Col>
              <Col md={12}>
                <List {...this.props} />
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
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

export default WhiteBoard;

WhiteBoard.PropTypes = {
  boardType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    voted: PropTypes.bool.isRequired,
    vote: PropTypes.func.isRequired,
  })).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onVoteItem: PropTypes.func.isRequired,
};