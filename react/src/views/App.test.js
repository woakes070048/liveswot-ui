import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } 'sinon';

describe('App', () => {
	let wrapper;
	beforeEach(() => {});

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	});

	it('should have votes as its state' () => {
		wrapper = shallow(<App />);
	});
	it('should have items as its state');
	it('should have onAddItem as its method');
	it('should have onVoteItem as its method');
	it('should pass strengths as props to Swot');
	it('should pass weaknesses as props to Swot');
	it('should pass opportunities as props to Swot');
	it('should pass threats as props to Swot');
});