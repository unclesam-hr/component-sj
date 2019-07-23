import React from 'react'
import Search from '../src/components/Search.jsx'
import {shallow} from 'enzyme'


describe('Search Component', () => {
    it('search input should be empty', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('#search-field').text()).toBe('');
    })

    it("renders correctly", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should respond store text entered into search input', () => {
        const wrapper = shallow(<Search />);
        wrapper.find('#search-field').simulate('change', {target: {value: 'ch'}});
        expect(wrapper.state('text')).toEqual('ch');
    })
    it('it should not have search list visible', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('.search-list').exists()).toBeFalsy()
    })

})

  
   


