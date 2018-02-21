import React, { Component } from 'react';
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
			color: '#aaaaaa',
		};

		this.handleVoteItem = this.handleVoteItem.bind(this);
	}

	render() {
		console.log('at ListItem, props:');
    console.log(this.props);
		return (
			<div> {/* TableRow */}
				<div> {/* TableRowColumn */}
					<div>
						<div md={1}>
							<div onClick={this.handleVoteItem}> {/* IconButton */}
								<div color={this.state.color}/> {/* Expandless */}
							</div>
						</div>
						<div style={itemTextStyle} md={11}>
								{this.props.item.text}
						</div>
					</div>
				</div>
			</div>
		);
	}

	handleVoteItem() {
		this.props.onVoteItem(this.props.item.id);
	}
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // votes: PropTypes.number.isRequired,
    // voted: PropTypes.bool.isRequired,
    // vote: PropTypes.func.isRequired,
  }).isRequired,
  onVoteItem: PropTypes.func.isRequired,
};
