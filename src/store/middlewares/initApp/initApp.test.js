import { stub, spy, assert, mock } from 'sinon';
import { expect } from 'chai';

import {InitApp, LoadToken} from '../../actions/index';
import initApp from './initApp';

describe('initApp middleware', () => {
  const authUtils = { getToken: spy() };
  const LoadToken = spy();
  const middleware = initApp({ authUtils, LoadToken });

  it('must return a function with one argument', () => {
    expect(middleware).to.be.a('function').that.have.length(1);
  });

  describe('next handler', () => {
    const next = spy();
    const doDispatch = () => {};
    const doGetState = () => {};
    const nextHandler = middleware({ dispatch: doDispatch, getState: doGetState });

    it('must be a function with one argument', () => {
      expect(nextHandler).to.be.a('function').that.have.length(1);
    });

    it('next is called once', () => {
      nextHandler(next)({ type: ''});
      assert.calledOnce(next);
    });

    describe('action handler', () => {
      let actionHandler = nextHandler({});

      it('must be a function with one argument', () => {
        expect(actionHandler).to.be.a('function').that.have.length(1);
      });

      describe('action type is INIT_APP', () => {
        const next = spy();
        const actionHandler = nextHandler(next);
        const action = InitApp();
        actionHandler(action);

        it('calls authUtils.getToken()', () => {
          assert.calledOnce(authUtils.getToken);
        });

        it('calls next with LoadToken(token)', () => {
          assert.calledOnce(next);
          assert.calledWith(next, LoadToken());
        });
      });

      describe('action type is not INIT_APP', () => {
        const next = spy();
        const action = {type: 'NOT_INIT_APP'};
        const actionHandler = nextHandler(next);
        actionHandler(action);

        it('passes action to next', () => {
          assert.calledOnce(next);
          assert.calledWith(next, action);
        });
      });
    });
  });
});