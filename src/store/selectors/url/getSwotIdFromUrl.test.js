import {expect} from 'chai';
import getSwotIdFromUrl from './getSwotIdFromUrl';

describe('(Selector) getSwotIdFromUrl', () => {

  describe('state.match has no swotId param', () => {
    const state = {};

    it('should return undefined', () => {
      const swotId = getSwotIdFromUrl(state);
      expect(swotId).to.be.undefined;
    });
  });

  describe('state.match has swotId param', () => {
    const state = {match: {params: {swotId: '123'}}};

    it('should return swotId as int', () => {
      const swotId = getSwotIdFromUrl(state);
      expect(swotId).to.be.a('number');
      expect(swotId).to.equal(123);
    });
  });
});