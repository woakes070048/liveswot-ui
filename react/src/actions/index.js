import {
  ADD_ITEM, VOTE_ITEM,
  UPDATE_NEW_ITEM, CLEAR_NEW_ITEM
} from './actionTypes';

export const AddItem = (text, cardType) => {
  return { type: ADD_ITEM, text, cardType };
};

export const VoteItem = (id) => {
  return { type: VOTE_ITEM, id };
};

export const UpdateNewItem = (text, cardType) => {
  return { type: UPDATE_NEW_ITEM, text, cardType };
};

export const ClearNewItem = (cardType) => {
  return { type: CLEAR_NEW_ITEM, cardType };
};
