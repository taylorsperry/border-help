import React from 'react'
import { Location } from './Location'
import { shallow } from 'enzyme'

describe('Location', () => {
  let wrapper
  let mockProps = {
    border: [0, 1],
    location: [1, 2],
    nearestPt: [],
    distance: 0,
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

    it('should call getBorder', () => {
      const spy = jest.spyOn(wrapper.instance(), 'getBorder')
      wrapper.instance().componentDidMount()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('setData', () => {

    it.skip('should update state when setData is called', () => {
      let initialState = {
        nearestPt: [],
        distance: 0,
        loading: true,
      }
      
      wrapper.setState(initialState)
      let nearestPt = [43, 34]
      let mockDist = 100
      wrapper.instance().setData(nearestPt)
  
      let expectedState = {
        nearestPt: nearestPt,
        distance: mockDist,
        loading: false
      }
  
      expect(wrapper.state()).toEqual(expectedState)
    })
  })
})