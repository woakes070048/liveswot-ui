import React;
import {shallow} from 'enzyme';
import {expect} from 'chai';
import RequestError import './RequestError';

describe('(Component) RequestError', () => {
    it('should display Error as string', () => {
        const err = new Error();
        const errors = [err];
        const props = {errors};

        const wrapper = shallow(<RequestError {...props}/>);
        expect(wrapper.toString().includes(err.toString()));
    });
});