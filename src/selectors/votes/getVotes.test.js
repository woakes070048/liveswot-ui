import { expect } from 'chai';

import getVotes from './getVotes';


describe('(selector) getVotes', () => {
  describe('state has 0 votes', () => {
    const state = {
      votes: {
        byId: {},
        errors: [],
        isLoading: false,
      }
    };

    it('returns empty array', () => {
      const votes = getVotes(state);
      expect(votes).to.be.an('array');
      expect(votes.length).to.equal(0);
    });
  });

  const
    vote1 = {voteId: 1, creatorId: 101, swotItemId: 201, voteType: 'up'},
    vote2 = {voteId: 2, creatorId: 101, swotItemId: 201, voteType: 'down'},
    vote3 = {voteId: 3, creatorId: 101, swotItemId: 202, voteType: 'up'},
    vote4 = {voteId: 4, creatorId: 102, swotItemId: 202, voteType: 'down'},
    vote5 = {voteId: 5, creatorId: 102, swotItemId: 203, voteType: 'down'};

  describe('state has more than 0 votes', () => {
    const state = {
      votes: {
        byId: {1: vote1, 2: vote2, 3: vote3, 4: vote4, 5: vote5},
        errors: [],
        isLoading: false,
      }
    };

    it('returns the correct array', () => {
      const votes = getVotes(state);
      expect(votes).to.be.an('array');
      expect(votes.length).to.equal(5);
      expect(votes).to.deep.equal([vote1, vote2, vote3, vote4, vote5]);
    });
  });

  describe('swotItemId argument provided', () => {
    const state = {
      votes: {
        byId: {1: vote1, 2: vote2, 3: vote3, 4: vote4, 5: vote5},
        errors: [],
        isLoading: false,
      }
    };

    it('returns the correct array', () => {
      const swotItemId = 201;
      const votes = getVotes(state, swotItemId);
      expect(votes).to.be.an('array');
      expect(votes.length).to.equal(2);
      expect(votes).to.deep.equal([vote1, vote2]);
    });
  });
});