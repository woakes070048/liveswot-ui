import { expect } from 'chai';

import getVotes from './votes';


describe('(selector) getVotes', () => {
  describe('state has 0 votes', () => {

    let state;
    beforeEach(() => {
      state = {
        votes: {
          byId: {},
          errors: [],
          isLoading: false,
        }
      };
    });

    it('returns empty array', () => {
      const swotItemId = 1;
      const votes = getVotes(state, swotItemId);
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
    let state;
    beforeEach(() => {
      state = {
        votes: {
          byId: {
            [vote1.voteId]: vote1,
            [vote2.voteId]: vote2,
            [vote3.voteId]: vote3,
            [vote4.voteId]: vote4,
            [vote5.voteId]: vote5
          },
          errors: [],
          isLoading: false,
        }
      };
    });

    it('returns the correct array', () => {
      const swotItemId1 = 201;
      const swotItemId2 = 202;
      const swotItemId3 = 203;

      const votes1 = getVotes(state, swotItemId1);
      expect(votes1).to.be.an('array');
      expect(votes1.length).to.equal(2);
      expect(votes1).to.deep.equal([vote1, vote2]);

      const votes2 = getVotes(state, swotItemId2);
      expect(votes2).to.be.an('array');
      expect(votes2.length).to.equal(2);
      expect(votes2).to.deep.equal([vote3, vote4]);

      const votes3 = getVotes(state, swotItemId3);
      expect(votes3).to.be.an('array');
      expect(votes3.length).to.equal(1);
      expect(votes3).to.deep.equal([vote5]);
    });
  });

  describe('no `swotItemId` and/or `state` argument provided', () => {
    let state;
    beforeEach(() => {
      state = {
        votes: {
          byId: {
            [vote1.voteId]: vote1,
            [vote2.voteId]: vote2,
            [vote3.voteId]: vote3,
            [vote4.voteId]: vote4,
            [vote5.voteId]: vote5
          },
          errors: [],
          isLoading: false,
        }
      };
    });

    it('throws error', () => {
      let fn;

      fn = () => getVotes(state);
      expect(fn).to.throw();

      fn = () => getVotes();
      expect(fn).to.throw();
    });
  });
});