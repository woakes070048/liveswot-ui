import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TableRow } from 'material-ui/Table';
import ListItem from './ListItem';
import Item from '../../../../../objects/Item';

describe('ListItem', () => {
	let wrapper;
	let item;
	beforeEach(() => {
		item = new Item('id-1', 'imranariffin', 'text 1', 'strength'); 
	});

	it('should render without crashing', () => {
		const tbody = document.createElement('tbody');
		ReactDOM.render(<MuiThemeProvider><ListItem item={item}/></MuiThemeProvider>, tbody);
	});

	it('should contain a table row', () => {
		wrapper = shallow(<ListItem item={item}/>);

		expect(wrapper.containsMatchingElement([
			<TableRow/>
		])).to.equal(true);
	});

	it('should show the text of the item', () => {
		wrapper = mount(
			<MuiThemeProvider>
				<table>
					<tbody>
					<ListItem item={item}/>
					</tbody>
				</table>
			</MuiThemeProvider>
		);

		expect(wrapper.text().indexOf(item.text)).to.not.equal(-1);
	});
});