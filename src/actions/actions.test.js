import {expect} from 'chai';

import {Vote} from "./actions";


describe('(action) Vote', () => {
  it('throws error when not enough args provided', () => {
    let fn;
    const
      swotItemId = 1,
      voteType = 'up',
      userId = 1;
    ;

    fn = () => Vote();
    expect(fn).to.throw();

    fn = () => Vote(swotItemId);
    expect(fn).to.throw();

    fn = () => Vote(swotItemId, voteType);
    expect(fn).to.throw();

    fn = () => Vote(swotItemId, voteType, userId);
    expect(fn).to.not.throw();
  });

  it('throws error when `voteType` arg is invalid', () => {
    let fn;
    const
      swotItemId = 1,
      userId = 1;
    ;

    fn = () => Vote(swotItemId, 'Down', userId);
    expect(fn).to.throw();

    fn = () => Vote(swotItemId, '', userId);
    expect(fn).to.throw();
  })
});