import ItemDispatcher from './ItemDispatcher';
import { ReduceStore } from 'flux/utils'
import ItemActionTypes from './ItemActionTypes';
import Immutable from 'immutable';
import Item from './Item';
import Counter from './Counter';

class ItemStore extends ReduceStore {
	constructor() {
		super(ItemDispatcher);

		this.addItem = this.addItem.bind(this);
		this.voteItem = this.voteItem.bind(this);
	}

	getInitialState() {
		return Immutable.OrderedMap();
	}

	reduce(state, action) {
		console.log('ItemStore.reduce()');

		switch(action.type) {
			case ItemActionTypes.ADD_ITEM:
				return this.addItem(state, action);

			case ItemActionTypes.VOTE_ITEM:
				return this.voteItem(state, action);

			default:
				return state;
		}
	}

	addItem(state, action) {
		console.log('ItemStore.addItem()');

		if ([
			'strength', 'weakness', 
			'opportunity', 'threat',
			].indexOf(action.boardType) === -1) {
			console.error('wrong type');
			return state;
		}
		if (!action.text) {
			console.error('action text cannot be empty');
			return state;
		}

		const id = Counter.increment();
		return state.set(id, new Item({
			id,
			username: 'imranariffin',
			text: action.text,
			boardType: action.boardType,
			vote: 0, voted: false,
		}));
	}

	voteItem(state, action) {
		console.log('ItemStore.voteItem()');

		const newstate = state.update(action.id,  (item) => {
			if (item.voted) {
				return item
					.set('voted', false)
					.set('vote', item.vote - 1);
			}

			return item
				.set('voted', true)
				.set('vote', item.vote + 1);
		});

		return newstate;
	}
}

export default new ItemStore();