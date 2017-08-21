import Immutable from 'immutable';

const Item = Immutable.Record({
	id: '',
	username: '',
	text: '',
	boardType: '',
	vote: 0,
	voted: false,
});

export default Item;