import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';


describe('Footer', () => {
	let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

	it('it should render without crashing', () => {
		const div = document.createElement('div');
  	ReactDOM.render(<Footer />, div);
	});
});
