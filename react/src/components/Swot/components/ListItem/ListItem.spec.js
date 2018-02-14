import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ListItem from './ListItem';
import Item from '../../../../objects/Item';

describe('ListItem', () => {
	let wrapper;
	let item;
	beforeEach(() => {
		item = new Item(1, 'imranariffin', 'text 1', 'strength');
	});

	it('should render without crashing', () => {
	});

	it('should contain a table row', () => {
	});

	it('should show the text of the item', () => {
	});
});
