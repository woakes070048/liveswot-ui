import React, { Component } from 'react';
import WhiteBoard from './components/WhiteBoard';

export default class Swot extends Component {
	render() {
    console.log('at Swot, props:');
    console.log(this.props);
		return (
			<div>
				<div>
					<div md={6} sm={12}>
						<WhiteBoard
							boardType={'strength'}
							items={this.props.strengths}
							onAddItem={this.props.onAddItem}
							onVoteItem={this.props.onVoteItem}
						/>
					</div>
					<div md={6} sm={12}>
						<WhiteBoard
							boardType={'weakness'}
							items={this.props.weaknesses}
							onAddItem={this.props.onAddItem}
							onVoteItem={this.props.onVoteItem}
						/>
					</div>
					<div md={6} sm={12}>
						<WhiteBoard
							boardType={'opportunity'}
							items={this.props.opportunities}
							onAddItem={this.props.onAddItem}
							onVoteItem={this.props.onVoteItem}
						/>
					</div>
					<div md={6} sm={12}>
						<WhiteBoard
							boardType={'threat'}
							items={this.props.threats}
							onAddItem={this.props.onAddItem}
							onVoteItem={this.props.onVoteItem}
						/>
					</div>
				</div>
			</div>
		);
	}
}
