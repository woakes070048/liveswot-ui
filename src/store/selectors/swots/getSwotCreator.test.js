import {expect} from 'chai';
import getSwotCreator from './getSwotCreator';

describe('(Selector) getSwotCreator', () => {
  describe('When swot does not exist', () => {
    it('returns null', () => {
      const state = {swots: {byId: {}}};
      const swotId = 1;
      expect(getSwotCreator(state, swotId)).to.be.null;
    });
  });
  describe('When swot exists', () => {
    it('returns creator', () => {
      const state = {
        swots: {byId: {1: {creatorId: 201}}},
        members: {byId: {201: {memberId: 201}}},
      };
      const swotId = 1;
      expect(getSwotCreator(state, swotId)).to.deep.equal({memberId: 201});
    });
  });
});