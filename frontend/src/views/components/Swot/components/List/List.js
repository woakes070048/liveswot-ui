import React, { Component } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
    	height: '300px',
  	};
	}

	render() {
    if (this.props.items.length === 0) {
      return null;
    }

		return (
      <Table
        height={this.state.height}
        fixedHeader={true}
        fixedFooter={true}
        selectable={true}
        multiSelectable={false}
      >
        <TableBody
          displayRowCheckbox={false}
          deselectOnClickaway={true}
          showRowHover={false}
          stripedRows={false}
        >
          {[].concat(this.props.items).sort((a, b) => {
            return a.votes - b.votes;
          }).reverse().map((item) => {
            return (
              <ListItem 
              	onVoteItem={this.props.onVoteItem}
              	item={item} 
                key={item.id}
              />
            );
           })}
        </TableBody>
      </Table>
		);
	}
}

List.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    voted: PropTypes.bool.isRequired,
    vote: PropTypes.func.isRequired,
  })).isRequired,
};