import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

describe('App', () => {
  const props = { onMountFetchItems: spy() };
	let app = shallow(<App { ...props } />);
	beforeEach(() => {});

	it('should have votes as its state', () => {});
	it('should have items as its state');
	it('should have onAddItem as its method');
	it('should have onVoteItem as its method');
	it('should pass strengths as props to Swot');
	it('should pass weaknesses as props to Swot');
	it('should pass opportunities as props to Swot');
	it('should pass threats as props to Swot');
});
