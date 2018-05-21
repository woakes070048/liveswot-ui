import {mapStateToProps} from './SwotListContainer';
import {expect} from 'chai';

describe('(Container) SwotListContainer', () => {
  describe('mapStateToProps', () => {
    it('returns props with correct data', () => {
      const state = {};
      const ownProps = {
        swot: {
          title: 'title',
          description: 'description',
          swotId: 101,
          creatorId: 1,
          createdAt: '2018-05-11 03:38 123213',
        }
      };

      const props = mapStateToProps(state, ownProps);
      const expectedProps = {
        swotId: 101,
        title: 'title',
        description: 'description',
        swotDateCreated: '2018-05-11 03:38',
        creatorUserName: 'anonymous',
      };

      expect(props).to.deep.equal(expectedProps);
    });
  });
});