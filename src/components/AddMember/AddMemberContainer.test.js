import {expect} from 'chai';
import {assert, spy} from 'sinon';
import {mapDispatchToProps} from './AddMemberContainer'

describe('(Container) AddMemberContainer', () => {
  describe('mapDispatchToProps', () => {
    describe('addMember', () => {
      it('dispatches AddMember action', () => {
        const userName = 'someUserName';
        const swotId = 1;
        const dispatch = spy();
        mapDispatchToProps(dispatch, {match: {params: {swotId}}}).addMember(userName);

        assert.calledOnce(dispatch);
      });
    });
  });
});