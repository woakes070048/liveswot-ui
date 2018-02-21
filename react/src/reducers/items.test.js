import items from './items';
import { AddItem, VoteItem } from '../actions';
import { expect } from 'chai';

describe('items reducer', () => {

  describe('initially', () => {

    const initState = [];

    it('adds one item', () => {
      const text = 'new item', cardType = 'strength';
      const action = AddItem(text, cardType);
      const expected = [ { ...initState, vote: 0, id: 0, text, cardType } ];

      expect(items(initState, action)).to.deep.equal(expected);
    });
  });

  describe('already has two items with zero vote with same cardType', () => {

    const state = [
      { vote: 0, id: 0, text: 'first item', cardType: 'strength' },
      { vote: 0, id: 1, text: 'second item', cardType: 'strength' },
    ];

    it('adds one more item', () => {
      const text = 'third item', cardType = 'strength';
      const action = AddItem(text, cardType);

      const expectedNewItem = { id: 2, vote: 0, text, cardType };
      expect(items(state, action)).to.deep.equal([ ...state, expectedNewItem ]);
    });

    it('upvotes on first item', () => {
      const id = 0;
      const action = VoteItem(id);

      const expected = [
        { vote: 1, id: 0, text: 'first item', cardType: 'strength' },
        { vote: 0, id: 1, text: 'second item', cardType: 'strength' },
      ];
      const actual = items(state, action);

      expect(actual).to.deep.equal(expected);
    });

    it('upvotes on second item', () => {
      const id = 1;
      const action = VoteItem(id);

      const expected = {
        vote: 1, id: 1,
        text: 'second item', cardType: 'strength'
      };
      const actual = items(state, action).find((e) => e.id === 1);

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('items sorted in descending order by vote', () => {
    describe('items initially empty list', () => {
      const state = [];
      describe('two items is added and one is voted', () => {
        const actual = items(
          items(
            items(state, AddItem('first', 'strength')),
            AddItem('second', 'strength'),
          ),
          VoteItem(1)
        );

        const expected = [
          { vote: 1, id: 1, text: 'second', cardType: 'strength' },
          { vote: 0, id: 0, text: 'first', cardType: 'strength' },
        ];

        expect(actual.length).to.equal(2);
        expect(actual).to.deep.equal(expected);
      });
    });
  });
});
