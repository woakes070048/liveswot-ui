import { ADD_ITEM, VOTE_ITEM } from './actionTypes';

export const AddItem = (text, boardType) => {
  return { type: ADD_ITEM, text, boardType };
};

export const VoteItem = (id) => {
  return { type: VOTE_ITEM, id };
};
