import ActionTypes from './ItemActionTypes';
import ItemDispatcher from './ItemDispatcher';

const Actions = {
	addItem(text, boardType) {
		ItemDispatcher.dispatch({
			type: ActionTypes.ADD_ITEM,
			text: text, 
			boardType: boardType,
		});
	},

	voteItem(id) {
		ItemDispatcher.dispatch({
			type: ActionTypes.VOTE_ITEM,
			id,
		});
	},
};

export default Actions;