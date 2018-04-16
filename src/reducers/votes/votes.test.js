import {expect} from 'chai';

import votes from './votes';
import {Vote} from "../../actions";
import {VOTE} from "../../actions/actionTypes";


describe('(reducer) votes', () => {
  describe('by default', () => {

    it('returns an object with correct shape', () => {
      const newState = votes();
      expect(newState).to.be.an('object');
      expect(newState).to.contain.all.keys('errors', 'isLoading', 'byId');
    });

    it('returns an object with correct data types', () => {
      const newState = votes();
      expect(newState.byId).to.be.an('object');
      expect(newState.isLoading).to.be.an('boolean');
    });
  });

  describe('action type is VOTE', () => {
    it('removes existing vote by user for the voted item, if any', () => {
      const state = {
        byId: {1: {voteId: 1, swotItemId: 1, creatorId: 1,}},
        isLoading: false,
        errors: []
      };
      const
        swotItemId = 1,
        voteType = 'up',
        userId = 1;
      const action = {type: VOTE, data:{swotItemId, voteType, userId}};
      const newState = votes(state, action);

      expect(newState.byId[1]).to.be.undefined;
    });
  });
});