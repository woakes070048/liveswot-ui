import swotItems from './index';
import {expect} from 'chai';
import {VOTE_SUCCESS} from "../../store/actions/actionTypes";

describe('(Reducer) swotItems', () => {
  describe('on action `VOTE_SUCCESS`', () => {
    it('sorts ids using updated score', () => {
      const action = {
        type: VOTE_SUCCESS,
        data: {swotItemId: 3, swotItemScore: 99}
      };
      const state = {
        byId: {
          1: {swotItemId: 1, score: 3},
          2: {swotItemId: 2, score: 2},
          3: {swotItemId: 3, score: 1},
        },
        ids: [1,2,3]
      };

      expect(swotItems(state, action).ids).to.deep.equal([3,1,2]);
    });

    it('sorts score of swotItem in byId', () => {
      const action = {
        type: VOTE_SUCCESS,
        data: {swotItemId: 1, swotItemScore: 99}
      };
      const state = {
        byId: {
          1: {swotItemId: 1, score: 3},
        },
        ids: [1]
      };

      expect(swotItems(state, action).byId[1].score).to.equal(action.data.swotItemScore);
    });
  });
});