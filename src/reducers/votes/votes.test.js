import {expect} from 'chai';

import votes from './votes';


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
    it('');
  });
});