import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import List from './';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Item from '../../../../../objects/Item';

describe('List', () => {
	let wrapper;

	beforeEach(() => {});

	it('should render without crashing', () => {
		const div = document.createElement('div');
		const onVoteItemSpy = spy();
		ReactDOM.render(<MuiThemeProvider><List items={[]} onVoteItem={onVoteItemSpy}/></MuiThemeProvider>, div);
	});

	it('should be able to contain empty items', () => {
		wrapper = shallow(<List items={[]} />);

		expect(wrapper.instance().props.items).to.eql([]);
	});

	it('should be able to contain a few items', () => {
		wrapper = mount(
			<MuiThemeProvider>
				<List
					items={[
						new Item('id-1', 'imranariffin', 'text 1', 'strength'),
						new Item('id-2', 'imranariffin', 'text 2', 'strength'),
						new Item('id-3', 'imranariffin', 'text 3', 'strength'),
					]}
				/>
			</MuiThemeProvider>
		);

		expect(wrapper.find('List').prop('items')).to.have.length(3);
	});

	it('should return null when have 0 items', () => {
		const onVoteItemSpy = spy();
		wrapper = shallow(<List items={[]} />);

		expect(wrapper.instance().props.items).to.eql([]);
		expect(wrapper.text()).to.equal('');
	});

	it('should return by default a table with fixed header, fixed footer, selectable and non-multiselectable', () => {
		wrapper = shallow(<List items={[new Item('id-1', 'imranariffin', 'text 1', 'strength'),]} />);

		expect(wrapper.prop('fixedHeader')).to.equal(true);
		expect(wrapper.prop('fixedFooter')).to.equal(true);
		expect(wrapper.prop('selectable')).to.equal(true);
		expect(wrapper.prop('multiSelectable')).to.equal(false);
	});

	it('should populate ListItems within TableBody', () => {
		wrapper = mount(
			<MuiThemeProvider>
				<List
					items={[
						new Item('id-1', 'imranariffin', 'text 1', 'strength'),
						new Item('id-2', 'imranariffin', 'text 2', 'strength'),
						new Item('id-3', 'imranariffin', 'text 3', 'strength'),
					]}
				/>
			</MuiThemeProvider>
		);
		const tableBody = wrapper.find('TableBody');

		expect(tableBody.text()).to.not.equal('');
		expect(tableBody.find('ListItem')).to.not.equal('');
		expect(tableBody.find('ListItem')).to.have.length(3);
	});

	it('should order ListItems in reverse based on votes', () => {
		wrapper = mount(
			<MuiThemeProvider>
				<List
					items={[
						new Item('id-1', 'imranariffin', 'text 1', 'strength').vote(),
						new Item('id-2', 'imranariffin', 'text 2', 'strength'),
						new Item('id-3', 'imranariffin', 'text 3', 'strength'),
					]}
				/>
			</MuiThemeProvider>
		);
		const tableBody = wrapper.find('TableBody');

		expect(tableBody.text()).to.not.equal('');
		// console.log(tableBody.find('ListItem').debug());
		// console.log(tableBody.find('ListItem').nodes[0].props.item);
		expect(tableBody.find('ListItem')).to.not.equal('');
		expect(tableBody.find('ListItem').nodes).to.be.an.instanceof(Array);
		expect(tableBody.find('ListItem').nodes[0].props.item.votes).to.equal(1);
		expect(tableBody.find('ListItem').nodes[1].props.item.votes).to.equal(0);
		expect(tableBody.find('ListItem').nodes[2].props.item.votes).to.equal(0);
	});
});
