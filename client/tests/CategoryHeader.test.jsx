import React from 'react'
import CategoryHeader from '../src/components/CategoryHeader.jsx'
import {shallow} from 'enzyme'

describe('TopHeader Component', () => {

    it("drop down menu should be visible", () => {

        const wrapper = shallow(<CategoryHeader/>)
        const dropdown = wrapper.find('.category-nav-columns').to.have.property('visibility', 'visible')
        wrapper.find('.dropdown').at(0).simulate('mouseenter');
        expect(dropdown).toEqual('true')
    })
})
