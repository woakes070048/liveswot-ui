import React, { Component } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import {grey500} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import { Row, Col } from 'react-bootstrap';

const itemTextStyle = {
	'overflow-x': 'auto', /* scroll horizontally when word overflow */
	'white-space':'normal', /* break line when paragraph overlow */
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
		console.log('ListItem.render()');

		return (
			<TableRow>
				<TableRowColumn>
					<Row>
						<Col md={1}>
							<IconButton onClick={() => { this.props.onVoteItem(this.props.item.id) }}>
								<ExpandLess color={this.state.color}/>
							</IconButton>
						</Col>
						<Col style={itemTextStyle} md={11}>
								{this.props.item.text}
						</Col>
					</Row>
				</TableRowColumn>
			</TableRow>
		);
	}

	handleVoteItem() {
		this.props.onVoteItem(this.props.item.id);
	}
}