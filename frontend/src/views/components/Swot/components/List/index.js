import React, { Component } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import ListItem from '../ListItem/index.js';

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
    	height: '300px',
  	};
	}

	render() {
		console.log('List.render()');
		
    if (this.props.items.size === 0) {
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
          {[...this.props.items.values()].sort((a, b) => {
            return a.vote - b.vote;
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