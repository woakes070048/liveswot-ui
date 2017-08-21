import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-bootstrap';
import WhiteBoard from './components/WhiteBoard/index.js';

export default class Swot extends Component {
	render() {
		console.log('Swot.render()');

		return (
			<MuiThemeProvider>
				<Grid>
					<Row>
						<Col md={6} sm={12}>
							<WhiteBoard
								boardType={'strength'}
								items={this.props.strengths}
								onAddItem={this.props.onAddItem}
								onVoteItem={this.props.onVoteItem}
							/>
						</Col>
						<Col md={6} sm={12}>
							<WhiteBoard
								boardType={'weakness'}
								items={this.props.weaknesses}
								onAddItem={this.props.onAddItem}
								onVoteItem={this.props.onVoteItem}
							/>
						</Col>
						<Col md={6} sm={12}>
							<WhiteBoard
								boardType={'opportunity'}
								items={this.props.opportunities}
								onAddItem={this.props.onAddItem}
								onVoteItem={this.props.onVoteItem}
							/>
						</Col>
						<Col md={6} sm={12}>
							<WhiteBoard
								boardType={'threat'}
								items={this.props.threats}
								onAddItem={this.props.onAddItem}
								onVoteItem={this.props.onVoteItem}
							/>
						</Col>
					</Row>
				</Grid>
			</MuiThemeProvider>
		);
	}
}