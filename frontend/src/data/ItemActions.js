import ActionTypes from './ItemActionTypes';
import ItemDispatcher from './ItemDispatcher';

import axios from 'axios';

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

	handleMountApp() {
		axios.get('/api/swot-items')
			.then((res) => {
				res.data.forEach((item) => {
					ItemDispatcher.dispatch({
						type: ActionTypes.ADD_ITEM,
						text: item.text,
						boardType: item.boardtype,
					});	
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
};

export default Actions;