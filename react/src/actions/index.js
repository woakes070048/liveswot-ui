import { ADD_ITEM, VOTE_ITEM } from './actionTypes';

export const AddItem = (text, boardType) => {
  return { type: ADD_ITEM, text, boardType };
};

export const VoteItem = () => {
  return { type: VOTE_ITEM };
};
