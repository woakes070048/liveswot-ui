import React, { Component } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import {grey500} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import PropTypes from 'prop-types';

const itemTextStyle = {
	'overflowX': 'auto', /* scroll horizontally when word overflow */
	'whiteSpace':'normal', /* break line when paragraph overlow */
};

export default class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			voted: false,
			color: grey500,
		};

		this.handleVoteItem = this.handleVoteItem.bind(this);
	}

	render() {
		console.log('at ListItem, props:');
    console.log(this.props);
		return (
			<TableRow>
				<TableRowColumn>
					<div>
						<div md={1}>
							<IconButton onClick={this.handleVoteItem}>
								<ExpandLess color={this.state.color}/>
							</IconButton>
						</div>
						<div style={itemTextStyle} md={11}>
								{this.props.item.text}
						</div>
					</div>
				</TableRowColumn>
			</TableRow>
		);
	}

	handleVoteItem() {
		this.props.onVoteItem(this.props.item.id);
	}
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // votes: PropTypes.number.isRequired,
    // voted: PropTypes.bool.isRequired,
    // vote: PropTypes.func.isRequired,
  }).isRequired,
  onVoteItem: PropTypes.func.isRequired,
};
