import { expect } from 'chai';

import getSwots from './getSwots';


describe('(selectors) getSwots', () => {
  describe('state has 0 swots', () => {
    const state = {
        swots: {
          byId: {},
          errors: [],
          isLoading: false,
        }
      };

    it(`returns empty list when no swots in state`, () => {
      const swots = getSwots(state);
      expect(swots).to.be.an('array');
      expect(swots.length).to.equal(0);
    });
  });

  describe('state has 1 swot', () => {
    const swot = {swotId: 1, creatorId: 101, title: 'Title 1', description: 'Description 1'};
    const state = {
      swots: {
        byId: {
          1: swot,
        },
        errors: [],
        isLoading: false,
      }
    };

    it('returns array with correct swot', () => {
      const swots = getSwots(state);
      expect(swots).to.be.an('array');
      expect(swots.length).to.equal(1);
      expect(swots[0]).to.deep.equal(swot);
    });
  });

  describe('state has more than 1 swot', () => {
    const
      swot1 = {swotId: 1, creatorId: 101, title: 'Title 1', description: 'Description 1'},
      swot2 = {swotId: 2, creatorId: 102, title: 'Title 2', description: 'Description 2'},
      swot3 = {swotId: 3, creatorId: 101, title: 'Title 3', description: 'Description 3'};
    const state = {
      swots: {
        byId: {
          1: swot1,
          2: swot2,
          3: swot3,
        },
        errors: [],
        isLoading: false,
      }
    };

    it('returns array with correct swots', () => {
      const swots = getSwots(state);
      expect(swots).to.be.an('array');
      expect(swots.length).to.equal(3);
      expect(swots).to.deep.equal([swot1, swot2, swot3]);
    });
  });
});