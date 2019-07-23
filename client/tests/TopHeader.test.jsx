import React from 'react'
import TopHeader from '../src/components/TopHeader'
import {shallow} from 'enzyme'
import ShipModal from '../src/components/ShipModal';

const props = {
    closeModal: () => {
        setState({modalOpened: false})
      }
}

describe('TopHeader Modal', () => {
    it('search input should be empty', () => {
        const wrapper = shallow(<TopHeader />);
        expect(wrapper.find('.flag-modal').exists()).toBeFalsy()
    })
    it('click should set modalOpened to true', () => {
        const wrapper = shallow(<TopHeader />);
        wrapper.find('#top-link-ship').simulate('click')
        expect(wrapper.state('modalOpened')).toBe(true)
    })
    it('click x should close modal', () => {
        
        const wrapper = shallow(<TopHeader />);
        const modalWrapper = shallow(<ShipModal closeModal={props.closeModal()}/>)
        wrapper.find('#top-link-ship').simulate('click')
        modalWrapper.find('#x-button').simulate('click')
        expect(wrapper.state('modalOpened')).toBe(false)
    })
    it('modal element should appear', () => {
        const wrapper = shallow(<TopHeader />);
        
        wrapper.find('#top-link-ship').simulate('click')
        expect(wrapper.find('.flag-modal').exists()).toBe(true)
    })
})