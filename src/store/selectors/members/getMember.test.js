import {expect} from 'chai';
import getMember from './getMember';

describe('(Selector) getMember', () => {
  describe('member does not exist', () => {
    it('returns null', () => {
      const state = {members: {byId: {}}, swots: {byId: {101: {}}}};
      const userId = 1;
      expect(getMember(state, userId)).to.be.null;
    });
  });
  describe('member & swot exist', () => {
    it('returns member', () => {
      const state = {members: {byId: {1: {memberId: 1}}}};
      const userId = 1;
      expect(getMember(state, userId));
    });
  });
});