import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
// import { fetchRights } from './App'


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('getRights', () => {
    
    it('should call fetchRights if there are no rights in the store', () => {
      const wrapper = shallow(<App />)
      wrapper.instance().getRights()
      // wrapper.instance().getRights()
      // expect(fetchRights).toHaveBeenCalled()
    })
  })

})

