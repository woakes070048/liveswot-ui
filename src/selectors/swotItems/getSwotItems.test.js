import { expect } from 'chai';

import getSwotItems from './getSwotItems';


describe('(selector) getSwotItems', () => {

  describe('state has 0 swotItems', () => {
    it('returns empty array', () => {
      const state = {
        swotItems: {
          byId: {},
          errors: [],
          isLoading: false,
        }
      };
      const swotItems = getSwotItems(state);
      expect(swotItems).to.be.an('array');
      expect(swotItems.length).to.equal(0);
    });
  });

  describe('state has 1 swotItem', () => {
    const swotItem = {
      swotItemId: 1,
      swotId: 1,
      creatorId: 1,
      text: 'Text',
      cardType: 'strength',
    };
    const state = {
      swotItems: {
        byId: {1: swotItem},
        errors: [],
        isLoading: false,
      }
    };

    it('returns correct array', () => {
      const swotItems = getSwotItems(state);
      expect(swotItems.length).to.equal(1);
      expect(swotItems).to.deep.equal([swotItem]);
    });
  });

  describe('state has more than 1 swotItem', () => {
    const swotItem1 = {
      swotItemId: 1, swotId: 101, creatorId: 201, text: 'Text', cardType: 'strength',
    };
    const swotItem2 = {
      swotItemId: 2, swotId: 101, creatorId: 201, text: 'Text', cardType: 'strength',
    };
    const swotItem3 = {
      swotItemId: 3, swotId: 102, creatorId: 201, text: 'Text', cardType: 'strength',
    };
    const state = {
      swotItems: {
        byId: {1: swotItem1, 2: swotItem2, 3: swotItem3},
        errors: [],
        isLoading: false,
      }
    };

    it('returns correct array', () => {
      const swotItems = getSwotItems(state);
      expect(swotItems.length).to.equal(3);
      expect(swotItems).to.deep.equal([swotItem1, swotItem2, swotItem3]);
    });
  });

  describe('argument swotId is provided', () => {
    const swotItem1 = {
      swotItemId: 1, swotId: 101, creatorId: 201, text: 'Text', cardType: 'strength',
    };
    const swotItem2 = {
      swotItemId: 2, swotId: 102, creatorId: 201, text: 'Text', cardType: 'strength',
    };
    const swotItem3 = {
      swotItemId: 3, swotId: 101, creatorId: 201, text: 'Text', cardType: 'strength',
    };
    const state = {
      swotItems: {
        byId: {1: swotItem1, 2: swotItem2, 3: swotItem3},
        errors: [],
        isLoading: false,
      }
    };

    it('returns correct array', () => {
      const swotId = 101;
      const swotItems = getSwotItems(state, swotId);
      expect(swotItems.length).to.equal(2);
      expect(swotItems).to.deep.equal([swotItem1, swotItem3]);
    });
  });
});