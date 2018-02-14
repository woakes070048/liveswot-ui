import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Header from './index';


describe('Header', () => {
	let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

	it('should contain AppBar', () => {});

	it('should contain the title', () => {
	});

	it('it should render without crashing', () => {
		const div = document.createElement('div');
  	ReactDOM.render(<Header />, div);
	});
});
