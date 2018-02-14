import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('App', () => {
	let app = shallow(<App />);
	beforeEach(() => {});

	it('should have votes as its state', () => {
		expect(app).toMatchSnapshot();
	});

	it('should have items as its state');
	it('should have onAddItem as its method');
	it('should have onVoteItem as its method');
	it('should pass strengths as props to Swot');
	it('should pass weaknesses as props to Swot');
	it('should pass opportunities as props to Swot');
	it('should pass threats as props to Swot');
});
