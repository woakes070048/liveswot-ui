import {expect} from 'chai';
import members, {initState} from './members';
import * as types from '../../store/actions/actionTypes';

describe('(Reducer) members', () => {
  describe('default state', () => {
    it('returns same state', () => {
      const state = {};
      const action = {};
      expect(members(state, action)).to.deep.equal(state);
    });
  });

  describe('on action fetchMembers', () => {
    it('returns previous state with `isLoading` as true', () => {
      const state = {byId: {}, isLoading: false, errors: []};
      const action = {type: types.FETCH_MEMBERS};
      expect(members(state, action)).to.deep.equal({
        ...state,
        isLoading: true,
      });
    });
  });

  describe('on action fetchMembersSuccess', () => {
    it('returns state with all fetched members', () => {
      const state = {};
      const action = {
        type: types.FETCH_MEMBERS_SUCCESS,
        data: [{
          memberId: 1,
          memberShipId: 101,
          swotId: 201,
          addedBy: 301,
        }, {
          memberId: 2,
          memberShipId: 102,
          swotId: 202,
          addedBy: 302,
        }, {
          memberId: 3,
          memberShipId: 103,
          swotId: 203,
          addedBy: 303,
        }],
      };
      expect(members(state, action)).to.deep.equal({
        byId: {
          1: {
            memberId: 1,
            memberShipId: 101,
            swotId: 201,
            addedBy: 301,
          },
          2: {
            memberId: 2,
            memberShipId: 102,
            swotId: 202,
            addedBy: 302,
          },
          3: {
            memberId: 3,
            memberShipId: 103,
            swotId: 203,
            addedBy: 303,
          },
        },
        errors: [],
        isLoading: false,
      });
    });
  });

  describe('on action fetchMembersError', () => {
    it('returns previous state with errors from action', () => {
      const state = {byId: {1: {}, 2: {}, 3: {}}, errors: [], isLoading: true};
      const action = {type: types.FETCH_MEMBERS_ERROR, errors: ['1', '2']};
      expect(members(state, action)).to.deep.equal({
        byId: {...state.byId},
        errors: action.errors,
        isLoading: state.isLoading,
      });
    });
  });
});