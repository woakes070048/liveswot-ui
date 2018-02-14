import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import WhiteBoard from './';
import { Row } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Item from '../../../../../objects/Item';

describe('WhiteBoard', () => {
	let wrapper;
	beforeEach(() => {});

	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<MuiThemeProvider>
				<WhiteBoard
					boardType={'strength'}
					items={[]}
				/>
			</MuiThemeProvider>,
			div
		);
	});

	it('should have Row as its root', () => {
		wrapper = shallow(<WhiteBoard boardType={'strength'} items={[]} />);

		expect(wrapper.containsMatchingElement([<Row />])).to.equal(true);
	});

	it('should start with empty text input');
	it('should not accept empty text input');
	it('should clear text input after adding item');
	// it('should start with empty text input', () => {
	// 	const onAddItemSpy = spy();
	// 	const onVoteItemSpy = spy();
	// 	wrapper = mount(
	// 		<MuiThemeProvider>
	// 			<WhiteBoard
	// 				boardType={'strength'}
	// 				onAddItem={onAddItemSpy}
	// 				onVoteItem={onVoteItemSpy}
	// 				items={[
	// 					new Item('id-1', 'imranariffin', 'text 1', 'strength')
	// 				]}
	// 			/>
	// 		</MuiThemeProvider>
	// 	);
	// 	console.log(wrapper.debug());
	// 	// console.log(wrapper.instance().text());

	// 	// expect(wrapper.state('text')).to.equal('');
	// 	console.log(wrapper.state('text'));
	// 	wrapper.onTextChange({target: {value: 'new Text'}});
	// 	console.log(wrapper.instance().state.text);
	// });

	// it('should not accept empty text input', () => {
	// 	const onKeyPressSpy = spy(WhiteBoard.prototype, 'onKeyPress');
	// 	wrapper = mount(
	// 		<MuiThemeProvider>
	// 			<WhiteBoard
	// 				boardType={'strength'}
	// 				items={[]}
	// 			/>
	// 		</MuiThemeProvider>
	// 	);
	// 	const textInput = wrapper.find('TextField');

	// 	textInput.simulate('focus');
	// 	textInput.simulate('keyPress', {keyCode: 15});
	// 	textInput.simulate('keyPress', {keyCode: 45});
	// 	textInput.simulate('change', {target: {value: 'Lolll'}});
	// 	console.log(wrapper.state('text'));
	// 	expect(onKeyPressSpy.calledOnce).to.equal(true);
	// });

	// it('should clear text input after pressing Enter', () => {
	// 	const onAddItemSpy = spy();
	// 	wrapper = mount(
	// 		<MuiThemeProvider>
	// 			<WhiteBoard
	// 				boardType={'strength'}
	// 				items={[]}
	// 				onAddItem={onAddItemSpy}
	// 			/>
	// 		</MuiThemeProvider>
	// 	);
	// });
});
