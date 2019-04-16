import React from 'react'
import { Location } from './Location'
import { fetchBorder } from '../../thunks/fetchBorder'
import { shallow } from 'enzyme'
// import * as helper for, './helper.js
// helper.getLocation = jest.fn(() => returns the info you need)
jest.mock('../../thunks/fetchBorder')

describe.skip('Location', () => {
  let wrapper
  let mockProps = {
    border: [[0,1], [2,3]],
    loading: false,
    fetchBorder: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<Location {...mockProps}/>)
    navigator.geolocation = {getCurrentPosition: jest.fn()}
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {

    it('should call getLocation', () => {
      const spy = jest.spyOn(wrapper.instance(), 'getLocation')
      wrapper.instance().componentDidMount()
      expect(spy).toHaveBeenCalled()
    })
  })
})