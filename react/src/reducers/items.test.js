import items from './items';
import { AddItem, VoteItem } from '../actions';
import { expect } from 'chai';

describe('items reducer', () => {

  describe('initially', () => {

    const initState = [];

    it('adds one item', () => {
      const text = 'new item', boardType = 'strength';
      const action = AddItem(text, boardType);
      const expected = [ { ...initState, vote: 0, id: 0, text, boardType } ];

      expect(items(initState, action)).to.deep.equal(expected);
    });
  });

  describe('already has two items with zero vote with same boardType', () => {

    const state = [
      { vote: 0, id: 0, text: 'first item', boardType: 'strength' },
      { vote: 0, id: 1, text: 'second item', boardType: 'strength' },
    ];

    it('adds one more item', () => {
      const text = 'third item', boardType = 'strength';
      const action = AddItem(text, boardType);

      const expectedNewItem = { id: 2, vote: 0, text, boardType };
      expect(items(state, action)).to.deep.equal([ ...state, expectedNewItem ]);
    });

    it('upvotes on first item', () => {
      const id = 0;
      const action = VoteItem(id);

      const expected = [
        { vote: 1, id: 0, text: 'first item', boardType: 'strength' },
        { vote: 0, id: 1, text: 'second item', boardType: 'strength' },
      ];
      const actual = items(state, action);

      expect(actual).to.deep.equal(expected);
    });

    it('upvotes on second item', () => {
      const id = 1;
      const action = VoteItem(id);

      const expected = [
        { vote: 1, id: 1, text: 'second item', boardType: 'strength' },
        { vote: 0, id: 0, text: 'first item', boardType: 'strength' },
      ];
      const actual = items(state, action);

      expect(actual).to.deep.equal(expected);
    });
  });
});
