import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppBar from 'material-ui/AppBar';


describe('Header', () => {
	let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

	it('should contain AppBar', () => {
		expect(wrapper.containsAllMatchingElements([
			<AppBar title='LiveSWOT.com'/>,
		])).to.equal(true);
	});

	it('should contain the title', () => {
		const appBar = wrapper.find('AppBar');
		expect(appBar.prop('title')).to.equal('LiveSWOT.com');
	});

	it('it should render without crashing', () => {
		const div = document.createElement('div');
  	ReactDOM.render(<Header />, div);
	});
});