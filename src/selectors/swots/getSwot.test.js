import getSwot from './getSwot';
import {expect} from 'chai';

describe('(Selector) getSwot', () => {
  describe('when swot not available', () => {
    const state = {swots: {byId: {}}};
    it('should return empty object', () => {
      const swotId = 1;
      const swot = getSwot(state, swotId);

      expect(swot).to.be.an('object').that.is.empty;
    });
  });

  describe('when swot available', () => {
    const expected = {
      swotId: 1,
      title: 'Title',
      creatorId: 101,
      description: 'Description',
    };
    const state = {swots: {byId: {1: expected}}};

    it('should return the swot', () => {
      const swotId = 1;
      const actual = getSwot(state, swotId);

      expect(actual).to.deep.equal(expected);
    });
  });
});