import { Container } from 'flux/utils';
import App from '../views/App';
import ItemActions from '../data/ItemActions';
import ItemStore from '../data/ItemStore';
import React, { Component } from 'react';

class AppContainer extends Component {
	static getStores() {
		return [
			ItemStore,
		];
	}

	static calculateState(prevState) {
		return {
			items: ItemStore.getState(),
			onAddItem: ItemActions.addItem,
			onVoteItem: ItemActions.voteItem,
		};
	}

	render() {
		console.log('AppContainer.render()');

		return (
			<App 
				items={this.state.items} 
				onAddItem={this.state.onAddItem}
				onVoteItem={this.state.onVoteItem}
			/>
		);
	}
}

export default Container.create(AppContainer);