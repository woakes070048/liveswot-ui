import React from 'react';
import { expect } from 'chai';
import ListItem from './ListItem';
import Item from '../../objects/Item';

describe('ListItem', () => {
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
