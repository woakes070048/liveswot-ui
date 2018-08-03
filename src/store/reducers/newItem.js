import { UPDATE_NEW_ITEM, CLEAR_NEW_ITEM } from '../store/actions/actionTypes';

const newItem = (state = {
  strength: '', weakness: '',
  opportunity: '', threat: '',
}, action) => {
  switch (action.type) {
    case UPDATE_NEW_ITEM:
      return { ...state, [action.cardType]: action.text };
    case CLEAR_NEW_ITEM:
      return { ...state, [action.cardType]: '' };
    default:
      return state;
  }
};

export default newItem;
