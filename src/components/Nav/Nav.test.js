import React from 'react'
import { Nav } from './Nav'
import { shallow } from 'enzyme'

describe('Nav', () => {
  let wrapper
  it('should match the snapshot', () => {
    wrapper = shallow(<Nav />)
    expect(wrapper).toMatchSnapshot()
  })
})